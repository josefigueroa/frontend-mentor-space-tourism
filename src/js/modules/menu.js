export class Menu{
  constructor(){
    this.menuEl = document.querySelector('.header__menu');
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
}