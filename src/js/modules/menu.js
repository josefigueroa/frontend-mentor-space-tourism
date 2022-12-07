export class Menu{
  constructor(){
    this.menuEl = document.querySelector('.header__menu');
    this.menubuttonEl = document.querySelector('.header__button');
    this.menubuttonCloseEl = document.querySelector('.header__button--close');
    this.blurBackgroundEl = document.querySelector('.header__blur');
  }

  openMenu(){
    this.menuEl.classList.add('header__menu--open');
    this.blurBackgroundEl.classList.add('header__blur--open');
  }
  closeMenu(){
    this.menuEl.classList.remove('header__menu--open');
    this.blurBackgroundEl.classList.remove('header__blur--open');
  }

  eventListeners(){
    this.menubuttonEl.addEventListener('click', (e) =>{
      if(e.target.nodeName === 'IMG'){
        this.openMenu();    
      }
    })

    this.menubuttonCloseEl.addEventListener('click', (e) =>{
      if(e.target.nodeName === 'IMG'){
        this.closeMenu();    
      }
    })
  }
}