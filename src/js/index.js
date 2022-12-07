import { Menu } from './modules/menu.js';
import { Tabs } from './modules/tabs.js';
import "../scss/style.scss";

const menu = new Menu();
const tabs = new Tabs();

window.addEventListener('DOMContentLoaded', () =>{
  menu.eventListeners();
  tabs.eventListeners();
})
