const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.main-menu');
const navLogo = document.querySelector('.name-logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const projectsMenu = document.querySelector('#projects-page');
  const contactMenu = document.querySelector('#contact-page');
  let scrollPos = window.scrollY;
 console.log(scrollPos);


  if ((elem && window.innerWidth < 576 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
  // adds 'highlight' class to my menu items

  while(window.innerWidth >= 768) {
    if(scrollPos < 486) {
      homeMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      return;
    } else if (scrollPos < 1849) {
      aboutMenu.classList.add('highlight');
      projectsMenu.classList.remove('highlight');
      homeMenu.classList.remove('highlight');
      return;
    } else if (scrollPos < 3400 ) {
      projectsMenu.classList.add('highlight');
      contactMenu.classList.remove('highlight');
      aboutMenu.classList.remove('highlight');
      return;
    } else if (scrollPos > 3400) {
      contactMenu.classList.add('highlight');
      projectsMenu.classList.remove('highlight');
      return;
    }
    break;
  }

  while (window.innerWidth > 576) {
    if(scrollPos < 511) {
      homeMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      return;
    }else if (scrollPos < 2974) {
      aboutMenu.classList.add('highlight');
      projectsMenu.classList.remove('highlight');
      homeMenu.classList.remove('highlight');
      return;
    } else if (scrollPos < 5523) {
      projectsMenu.classList.add('highlight');
      contactMenu.classList.remove('highlight');
      aboutMenu.classList.remove('highlight');
      return;
    } else if (scrollPos < 5871) {
      contactMenu.classList.add('highlight');
      projectsMenu.classList.remove('highlight');
      return;
    }
    return;
  }

  while (window.innerWidth <= 576) {
    if (elem && scrollPos < 600) {
      elem.classList.remove('highlight');
    }
    return;
  }

};


window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 576 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
