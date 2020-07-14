import axios from 'axios';
import { getHomePage } from '../navigation/navigation';

const API_KEY = "AIzaSyAAYIxblmS4RC1D5P88p075MgGD1OC3OK0";
const signInUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword';
const signUpUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp'

export const authPage = () => {
  const user = {
    email: "",
    password: ""
  }

  const refs = {
    authForm: document.querySelector('.authForm'),
    authLink: document.querySelector('[data-page="auth"]'),
    signOutLink: document.querySelector('[data-page="signOut"]'),
    profileLink: document.querySelector('[data-page="profile"]'),
  }

  const getUserInfo = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    user[name] = value;
  }

  const authWithEmailAndPassword = (url) => {
    axios.post(`${url}?key=${API_KEY}`, { ...user, returnSecureToken: true })
      .then(response => localStorage.setItem('user', JSON.stringify({ id: response.data.localId, token: response.data.idToken, email: response.data.email })))
      .then(() => {
        refs.authForm.reset();
        user.email = '';
        user.password = '';
        getHomePage();
        refs.authLink.classList.add('invisible');
        refs.signOutLink.classList.remove('invisible');
        refs.profileLink.classList.remove('invisible');
      })
  }

  const authUser = (e) => {
    e.preventDefault();
    switch (e.submitter.dataset.action) {
      case "signIn":
        authWithEmailAndPassword(signInUrl)
        break;
      case "signUp":
        authWithEmailAndPassword(signUpUrl)
        break;
      default:
        authWithEmailAndPassword(signInUrl)
        break;
    }


  }

  refs.authForm.addEventListener('input', getUserInfo);
  refs.authForm.addEventListener('submit', authUser);

}

export const authForm = () => {
  return `
  <div class="backDrop">
    <form name="authForm" class="authForm">
      <input type="text" name="email" class="authFormInput" placeholder="Email"/>
      <input type="text" name="password" class="authFormInput" placeholder="Password"/>
      <div class="authFormButtonsGroup">
        <button type="submit" data-action="signIn" class="button">
          Sign In
        </button>
        <button type="submit" data-action="signUp" class="button">
          Sign Up
        </button>
      </div>
    </form>
  </div>
  `
}




