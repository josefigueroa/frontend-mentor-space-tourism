export class Tabs{
  constructor(){
    this.tabEl = document.querySelectorAll('.nav-tabs__link');
    this.tabContentEl = document.querySelectorAll('.nav-content__pane');
    this.imgSectionEl = document.querySelector('.image-section__img');
    this.imgSectionImgEl = document.querySelector('.image-section__img img');
  }

  changeStatusLinks(target){
    this.tabEl.forEach(links => {
      links.classList.remove('nav-tabs__link--active');
      links.setAttribute('aria-selected', false);
    });

    target.classList.add('nav-tabs__link--active');
    target.setAttribute('aria-selected', true);
  }

  changeContentTab(id){
    this.tabContentEl.forEach(contents => {
      contents.classList.remove('nav-content__pane--active');
    });

    document.querySelector(`#${id}`).classList.add('nav-content__pane--active');
  }

  changeImgSection(id){
    this.imgSectionEl.classList.remove('image-section__img--show');    

    setTimeout(() =>{
      this.imgSectionImgEl.setAttribute('src', `../img/destination/image-${id}.webp`);
      this.imgSectionImgEl.setAttribute('alt', `${id}`);
      this.imgSectionEl.classList.add('image-section__img--show');
    }, 100);    
  }
}