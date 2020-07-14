
import { homePage } from '../pages/homePage.js'
import { productsPage } from '../pages/productsPage.js';
import { authPage, authForm } from '../pages/authPage.js';
import { profilePage, productForm } from '../pages/profilePage.js';

const refs = {
  navigationList: document.querySelector('.navigationList'),
  content: document.querySelector('.content'),
  authLink: document.querySelector('[data-page="auth"]'),
  signOutLink: document.querySelector('[data-page="signOut"]'),
  profileLink: document.querySelector('[data-page="profile"]'),
}


export const getHomePage = () => {
  refs.content.innerHTML = homePage();
  const activePage = document.querySelector('.activeNavigationListItem');
  activePage.classList.remove('activeNavigationListItem');
  const home = document.querySelector('.navigationListItem');
  home.classList.add('activeNavigationListItem');
}

export const navigation = () => {
  const getActivePage = (e) => {
    if (e.target === e.currentTarget) {
      return
    }
    const activePage = document.querySelector('.activeNavigationListItem');
    activePage.classList.remove('activeNavigationListItem');
    e.target.classList.add('activeNavigationListItem');
    switch (e.target.dataset.page) {
      case 'home':
        refs.content.innerHTML = homePage();
        break;
      case 'products':
        refs.content.innerHTML = productsPage();
        break;
      case 'profile':
        refs.content.innerHTML = productForm();
        profilePage();
        break;
      case 'auth':
        refs.content.innerHTML = authForm();
        authPage();
        break;
      case 'signOut':
        getHomePage();
        refs.authLink.classList.remove('invisible');
        refs.signOutLink.classList.add('invisible');
        refs.profileLink.classList.add('invisible');
        localStorage.clear();
        break;
      default:
        getHomePage()
        break;
    }
  }


  refs.content.innerHTML = homePage();
  refs.navigationList.addEventListener('click', getActivePage)

}
