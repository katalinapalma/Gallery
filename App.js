class App {
  constructor(content){
    this.content = content;
    this.initElement();
    this.initButtons();
    this.addEventListeners();
    this.changeScreen();
  }

  initElement(){
    //Header
    this.headerDiv = document.createElement('div');
    this.headerDiv.setAttribute('id', 'header');
    document.body.appendChild(this.headerDiv);
  
    //  created h1 inside the header div, with id 'header-h1'
    this.headerH1 = document.createElement('h1');
    this.headerH1.setAttribute('id', 'header-h1');
    this.headerDiv.appendChild(this.headerH1);
    this.headerH1.innerText = 'Gallery application 2000';

    //Content
    this.wrapperDiv = document.createElement('div');
    this.wrapperDiv.setAttribute('id', 'wrapper');
    document.body.appendChild(this.wrapperDiv);

    //Sidebar
    this.sidebarDiv = document.createElement('div'); //create sidebar div
    this.sidebarDiv.setAttribute('id', 'sidebar');
    document.getElementById('wrapper').appendChild(this.sidebarDiv);
      
    this.sidebarButtonDiv = document.createElement('div'); //create div for h2
    this.sidebarDiv.appendChild(this.sidebarButtonDiv);
    this.sidebarButtonDiv.setAttribute('id', 'sidebar-button-div');
    
    
    //Main content
    this.mainContentDiv = document.createElement('div'); //create maincontent div
    this.mainContentDiv.setAttribute('id', 'main-content'); //setting id to div
    document.getElementById('wrapper').appendChild(this.mainContentDiv);
  
  
  }

  initButtons(){
    let bodyRef = document.getElementById("sidebar-button-div");

    this.newImagesButton = document.createElement('button');
    this.newImagesButton.className = 'navButton';
    this.newImagesButton.innerText = 'New Image';
    bodyRef.appendChild(this.newImagesButton);
    
    this.imagesButton = document.createElement('button');
    this.imagesButton.className = 'navButton';
    this.imagesButton.innerText = 'Images';
    bodyRef.appendChild(this.imagesButton);

    this.galleryButton = document.createElement("button");
    this.galleryButton.className = 'navButton';
    this.galleryButton.innerText = 'Gallery';
    bodyRef.appendChild(this.galleryButton);
  }

  addEventListeners(){
    this.newImagesButton.addEventListener('click', () => {
      this.changeScreen('New Image');
    })

    this.imagesButton.addEventListener('click', () => {
      this.changeScreen('Images');
    })
    this.galleryButton.addEventListener(  'click', () => {
      this.changeScreen('Gallery');
    })
  }

  changeScreen(screenType){
    if(this.activeScreen) {
      this.activeScreen.removeMe();
    }

    switch(screenType) {
      case 'New Image':
        this.activeScreen = new NewImageScreen();
        break;
      case 'Images':
        this.activeScreen = new ImageScreen();
        break;
      case 'Gallery':
        this.activeScreen = new GalleryScreen();
        break;
      default:
        this.activeScreen = new NewImageScreen();
    }
  }
}
document.addEventListener('DOMContentLoaded', function(){
  
  new App();
})