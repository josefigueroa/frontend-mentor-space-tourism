export class Tabs{
  constructor(){
    this.tabsEl = document.querySelector('.nav-tabs');
    this.tabLinkEl = document.querySelectorAll('.nav-tabs__link');
    this.tabContentEl = document.querySelectorAll('.nav-content__pane');
    this.imgSectionEl = document.querySelector('.section__img');
    this.imgSectionImgEl = document.querySelector('.section__img img');
    this.sectionActive = document.querySelector('.header__link-menu--active');
  }

  swithActiveclass(){
    return {
      active: 'nav-tabs__link--active',
      rounded: 'nav-tabs__link--active-rounded',
      numbered: 'nav-tabs__link--active-numbered',
    }
  }
  changeStatusLinks(target){
    let objClassAvtive = this.swithActiveclass()
    let classActive = objClassAvtive[target.dataset.active] || 'nav-tabs__link--active';

    this.tabLinkEl.forEach(links => {
      links.classList.remove(classActive);
      links.setAttribute('aria-selected', false);
    });

    target.classList.add(classActive);
    target.setAttribute('aria-selected', true);
  }

  changeContentTab(id){
    this.tabContentEl.forEach(contents => {
      contents.classList.remove('nav-content__pane--active');
    });

    document.querySelector(`#${id}`).classList.add('nav-content__pane--active');
  }

  changeImgSection(id){
    let fileImg = this.sectionActive.textContent.toLowerCase();
    let extenxion = (fileImg == 'technology' ? 'jpg' : 'webp')
    this.imgSectionEl.classList.remove('section__img--show');


    setTimeout(() =>{
      this.imgSectionImgEl.setAttribute('src', `../img/${fileImg}/image-${id}.${extenxion}`);
      this.imgSectionImgEl.setAttribute('alt', `${id}`);
      this.imgSectionEl.classList.add('section__img--show');
    }, 100);    
  }

  eventListeners(){    
    this.tabsEl.addEventListener('click', (e) =>{
      if(e.target.classList.contains('nav-tabs__link')){
        let dataTarget = e.target.dataset.target;
        this.changeStatusLinks(e.target);
        this.changeContentTab(dataTarget);
        this.changeImgSection(dataTarget);
      }
    })
  }
}