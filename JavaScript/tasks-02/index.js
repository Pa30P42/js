const navigation = () => {
  const navRef = document.querySelector(".navigation");
  const activeLink = navRef.querySelector(".navigationLink a");
  const content = document.querySelector(".content"); //div

  activeLink.classList.add("activeNavigationLink"); //firstElement of ul

  const setActiveLink = (e) => {
    if (e.target.nodeName === "A" && e.target.dataset.navlink) {
      const activeLinkNew = navRef.querySelector(".activeNavigationLink");
      activeLink && activeLinkNew.classList.remove("activeNavigationLink");
      e.target.classList.add("activeNavigationLink");
    }
  };

  navRef.addEventListener("click", setActiveLink);
};

navigation();
