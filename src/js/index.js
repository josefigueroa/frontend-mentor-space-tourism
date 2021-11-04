import { Menu } from './modules/menu.js';
import { Tabs } from './modules/tabs.js';
import "../scss/style.scss";

const tabs = new Tabs();
const menu = new Menu();

const tabsEl = document.querySelector('.nav-tabs');
const menubuttonEl = document.querySelector('.header__button');
const menubuttonCloseEl = document.querySelector('.header__button--close');

menubuttonEl.addEventListener('click', (e) =>{
  if(e.target.nodeName === 'IMG'){
    menu.openMenu();    
  }
})

menubuttonCloseEl.addEventListener('click', (e) =>{
  if(e.target.nodeName === 'IMG'){
    menu.closeMenu();    
  }
})


tabsEl.addEventListener('click', (e) =>{
  if(e.target.className === 'nav-tabs__link'){
    let id = e.target.dataset.target;
    tabs.changeStatusLinks(e.target);
    tabs.changeContentTab(id);
    tabs.changeImgSection(id);
  }
})

window.addEventListener('DOMContentLoaded', () =>{
  
})
