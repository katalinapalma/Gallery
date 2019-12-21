class App {
  constructor(content){
    this.content = content;
    this.initElement();
    this.initButtons();
    this.addEventListeners();
    this.changeScreen();
    this.logInModal();
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

    //Log in button
    this.loginButton = document.createElement('button'); //creates login button
    this.loginButton.id = 'login-button'; //sets id for login button
    this.loginButton.innerText = 'Log in'; //sets inner text for login button 
    bodyRef.appendChild(this.loginButton); //puts the login button inside the side bar div

    this.loginModal = document.createElement('div'); //creates a new div for modal
    this.loginModal.className = 'modal'; //gives modal div a class name 
    this.loginModal.id = 'loginModal'; //gives modal div an id 
    bodyRef.appendChild(this.loginModal); //puts the modal div under the log in button

    //Modal for log in button
    this.modalContent = document.createElement('div'); //creates div for modal content
    this.modalContent.className = 'modal-content'; //gives the modal div a class name
    this.loginModal.appendChild(this.modalContent); //puts the content inside the login modal

    this.spanCloseButton = document.createElement('span'); //creates span
    this.spanCloseButton.className = 'close'; //gives span a class name
    this.spanCloseButton.innerText = 'X'; //adds icon to close the modal
    this.modalContent.appendChild(this.spanCloseButton); //puts span inside modal content div

    // creates form for log in 
    this.logInForm = document.createElement('form'); //creates log in form 
    this.loginNameLabel = document.createElement('p'); //creates label for name input field
    this.loginNameLabel.innerText = 'Email:';
    this.logInEmail = document.createElement('input'); //input for email
    this.logInEmail.name = 'email';
    this.loginPasswordLabel = document.createElement('p'); //creates label for name input field
    this.loginPasswordLabel.innerText = 'Password:';
    this.logInPassword = document.createElement('input'); //input for password
    this.logInPassword.name = 'password';
    this.logInButton2 = document.createElement('button'); //log in button
    this.logInButton2.innerText = 'Log in';

    //appends children to the modal content div
    this.modalContent.appendChild(this.logInForm);
    this.modalContent.appendChild(this.loginNameLabel);
    this.modalContent.appendChild(this.logInEmail);
    this.modalContent.appendChild(this.loginPasswordLabel);
    this.modalContent.appendChild(this.logInPassword);
    this.modalContent.appendChild(this.logInButton2);

    //sets id for the log in form, inputs and button.
    this.logInForm.id = 'logInForm'; 
    this.logInEmail.id = 'email';
    this.logInPassword.id = 'password';  
    this.logInButton2.id =  'login';

    //creates new Image button
    this.newImagesButton = document.createElement('button');
    this.newImagesButton.className = 'navButton';
    this.newImagesButton.innerText = 'New Image';
    bodyRef.appendChild(this.newImagesButton);
    
    //Creates images button
    this.imagesButton = document.createElement('button');
    this.imagesButton.className = 'navButton';
    this.imagesButton.innerText = 'Images';
    bodyRef.appendChild(this.imagesButton);

    //Creates gallery button
    this.galleryButton = document.createElement("button");
    this.galleryButton.className = 'navButton';
    this.galleryButton.innerText = 'Gallery';
    bodyRef.appendChild(this.galleryButton);
  }

  logInModal() {
    let loginBtn = document.getElementById('login-button');
    let spanClose = document.getElementsByClassName('close')[0];
    let modal = document.getElementById('loginModal');
    
    loginBtn.addEventListener('click', (e) => { //when user clicks on log in button, the modal opens
      modal.style.display = 'block';
    })
    
    spanClose.addEventListener('click', (e) => { //when user clicks on x, modal closes
      modal.style.display = 'none';
    })

    window.addEventListener('click', (e) => { //user can click anywhere on window to close modal
      if(e.target === modal) {
        modal.style.display = 'none';
      }
    })
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

// Global variables
var globalImageObj = {};
var globalObjectArray = [];
