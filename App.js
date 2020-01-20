/**
 * @description - Class that contains the functionality and heart of the application
 * contains the global variables, login functionality 
 * @author Karwan, Katalina & Ante
 */
class App {
  constructor(content){
    this.content = content;
    this.initElement();
    this.initButtons();
    this.createLoginWindow();
    ScreenHandler.changeScreen();
  }

  /**
   * @description - method that creates the UI for the whole application
   */
  initElement(){
    //Header Div
    this.headerDiv = document.createElement('div');
    this.headerDiv.setAttribute('id', 'header');
    document.body.appendChild(this.headerDiv);
  
    // Loginheader Div
    this.loginDiv = document.createElement('div');
    this.loginDiv.setAttribute('id', 'login-div');
    this.headerDiv.appendChild(this.loginDiv);

    // User icon
    this.loginIcon = document.createElement('img');
    this.loginIcon.id = "user-icon";
    this.loginIcon.src = "media/images/icon-4.png";
    this.loginDiv.appendChild(this.loginIcon);

    // Create h1  for displaying logged in user 
    this.loginHeader = document.createElement('h1');
    this.loginHeader.setAttribute('id', 'login-header');
    this.loginDiv.appendChild(this.loginHeader);

    // KEEP USER LOGGED IN
    // If not logged in, display welcome message
    if(sessionStorage.length == 0) {
      this.loginHeader.innerText = 'Welcome, please log in';
    } else {
      this.loginHeader.innerText = sessionStorage.getItem("userEmail");
    }

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
    this.sidebarDiv = document.createElement('div');
    this.sidebarDiv.setAttribute('id', 'sidebar');
    document.getElementById('wrapper').appendChild(this.sidebarDiv);
      
    this.sidebarButtonDiv = document.createElement('div'); 
    this.sidebarDiv.appendChild(this.sidebarButtonDiv);
    this.sidebarButtonDiv.setAttribute('id', 'sidebar-button-div');
    
    //Main content
    this.mainContentDiv = document.createElement('div'); 
    this.mainContentDiv.setAttribute('id', 'main-content'); 
    document.getElementById('wrapper').appendChild(this.mainContentDiv);
  }

  /**
  * @description - Method that creates the navigation buttons and login button
  *        Event that listens for a click, when clicked it changes screens
  */
  initButtons(){
    this.sidebarRef = document.getElementById("sidebar-button-div");

    //Log in button
    this.loginButton = document.createElement('button'); 
    this.loginButton.id = 'login-button'; 
    this.loginButton.innerText = 'Log in'; 
    this.sidebarRef.appendChild(this.loginButton); 

    //creates new Image button
    this.newImagesButton = document.createElement('button');
    this.newImagesButton.className = 'navButton';
    this.newImagesButton.innerText = 'New Image';
    this.sidebarRef.appendChild(this.newImagesButton);
    
    //Creates images button
    this.imagesButton = document.createElement('button');
    this.imagesButton.className = 'navButton';
    this.imagesButton.innerText = 'Images';
    this.sidebarRef.appendChild(this.imagesButton);

    //Creates gallery button
    this.galleryButton = document.createElement("button");
    this.galleryButton.className = 'navButton';
    this.galleryButton.innerText = 'Gallery';
    this.sidebarRef.appendChild(this.galleryButton);

    //Eventlisteners for navigating pages
    this.newImagesButton.addEventListener('click', () => {
      ScreenHandler.changeScreen('New Image');
    })

    this.imagesButton.addEventListener('click', () => {
      ScreenHandler.changeScreen('Images', 'Sidebar');
    })
    this.galleryButton.addEventListener(  'click', () => {
      ScreenHandler.changeScreen('Gallery');
    })
  }

/**
 * @description - Method that creates the modal for the login
 * Has eventlisteners that listens for when the user opens/closes the modals 
 * and also to validate the name/password
 */
  createLoginWindow() {

    //Outer modal
    this.loginModal = document.createElement('div'); 
    this.loginModal.className = 'modal'; 
    this.sidebarRef.appendChild(this.loginModal); 

    //Inner modal (content)
    this.modalContent = document.createElement('div'); 
    this.modalContent.className = 'modal-content'; 
    this.loginModal.appendChild(this.modalContent); 

    //Close button
    this.spanCloseButton = document.createElement('span'); 
    this.spanCloseButton.className = 'close'; 
    this.spanCloseButton.innerText = 'X'; 
    this.modalContent.appendChild(this.spanCloseButton); 

    this.logInForm = document.createElement('form'); 
    this.logInForm.id = 'logInForm'; 

    //Email
    this.loginNameLabel = document.createElement('p');
    this.loginNameLabel.innerText = 'Email:';
    this.logInEmail = document.createElement('input'); 
    this.logInEmail.id = 'email';
    this.emailError = document.createElement('div'); 
    this.emailError.id = 'emailError';

    //Password
    this.loginPasswordLabel = document.createElement('p'); 
    this.loginPasswordLabel.innerText = 'Password:';
    this.logInPassword = document.createElement('input'); 
    this.logInPassword.id = 'password';  
    this.passwordError = document.createElement('div'); 
    this.passwordError.id = 'pswError';

    //Login button
    this.formLoginButton = document.createElement('button'); 
    this.formLoginButton.innerText = 'Log in';
    this.formLoginButton.id =  'login';

    //Login validation message
    this.loginSuccessful = document.createElement('div'); 
    this.loginSuccessful.id = 'loginSuccessMsg';
    this.loginFailMsg = document.createElement('div'); 
    this.loginFailMsg.id = 'loginFail';

    // Append on screen
    this.modalContent.appendChild(this.logInForm);
    this.logInForm.appendChild(this.loginNameLabel);
    this.logInForm.appendChild(this.logInEmail);
    this.logInForm.appendChild(this.loginPasswordLabel);
    this.logInForm.appendChild(this.logInPassword);
    this.logInForm.appendChild(this.formLoginButton);
    this.logInForm.appendChild(this.emailError);
    this.logInForm.appendChild(this.passwordError);
    this.logInForm.appendChild(this.loginSuccessful);
    this.logInForm.appendChild(this.loginFailMsg);

    //when user clicks on log in button, the modal opens
    this.loginButton.addEventListener('click', (e) => { 
      this.loginModal.style.display = 'block';
    })

    //when user clicks on x, modal closes
    this.spanCloseButton.addEventListener('click', (e) => { 
      this.loginModal.style.display = 'none';
    })

    //user can click anywhere on window to close modal
    window.addEventListener('click', (e) => { 
      if(e.target === this.loginModal) {
        this.loginModal.style.display = 'none';
      }
    })
    
    //when user clicks 'log in' we validate
    this.formLoginButton.addEventListener('click', (e) => {
      this.validateLogin();
      e.preventDefault();
    })
  }

  /**
   * @description Checks if input email and password matches database
   * Checks if input email and password matches the regex requirements
   * 
   */
  validateLogin() {
    //Regular expressions for validating password
    let letterReq = /[a-z]/g;
    let specialChar = /\W/g;
    let emailRegExp = /@/g;
    let dotReq = /\./g;

    // getting the IDs for the inputfields and the texts
    let emailErrorRef = document.getElementById('emailError');
    let passWordErrorRef = document.getElementById('pswError');
    let emailRef = document.getElementById("email");
    let passWordRef = document.getElementById('password');

    if(!this.logInEmail.value.match(emailRegExp)) {
      emailErrorRef.innerHTML = '*Email needs @*';
      emailRef.style.border = "1px solid red";
      document.getElementById('loginSuccessMsg').innerHTML = '';
      document.getElementById('loginFail').innerHTML = '';
      passWordErrorRef.innerHTML = '';
      return;
    } 
    
   else if(!this.logInEmail.value.match(dotReq)){
      emailErrorRef.innerHTML = '*Email needs .*';
      emailRef.style.border = "1px solid red";
      document.getElementById('loginSuccessMsg').innerHTML = '';
      document.getElementById('loginFail').innerHTML = '';
      passWordErrorRef.innerHTML = '';
      return;
    }
    else{
      emailErrorRef.innerHTML = ''; 
      emailRef.style.border = "none";       
    }

    if(!this.logInPassword.value.match(specialChar)) {
      passWordErrorRef.innerHTML = '*Password requiers speciel characters*';
      passWordRef.style.border = "1px solid red";
      document.getElementById('loginSuccessMsg').innerHTML = '';
      document.getElementById('loginFail').innerHTML = '';
      return;
    }
    else if(!this.logInPassword.value.match(letterReq)){
      passWordErrorRef.innerHTML = '*Password requiers leters*';
      passWordRef.style.border = "1px solid red";
      document.getElementById('loginSuccessMsg').innerHTML = '';
      document.getElementById('loginFail').innerHTML = '';
      return;
    }
    else{
      passWordErrorRef.innerHTML = '';
      passWordRef.style.border = "none";
    }

    // Get users from JSON placeholder and check if login data entered matches the database
    // If it does = login succesful
    let getUsers = getJsonData.getData('https://jsonplaceholder.typicode.com/users');
    getUsers.then((users) => {

    for(let i = 0; i<users.length;i++) {
        if(this.logInEmail.value.toLowerCase() == users[i].email.toLowerCase() && this.logInPassword.value == users[i].address.suite) {
          document.getElementById('loginSuccessMsg').innerHTML = 'Login Successful';
          document.getElementById('loginFail').innerHTML = ''; 
          sessionStorage.setItem("userID", users[i].id);
          this.indicateUserLoggedIn(); 
          break;
        }      
        else if (this.logInEmail.value != users[i].email) {
          document.getElementById('loginFail').innerHTML = '*User does not exist*';
          document.getElementById('loginSuccessMsg').innerHTML = '';
          passWordErrorRef.innerHTML = '';
        }
        else if (this.logInPassword.value != users[i].address.suite){
          passWordErrorRef.innerHTML = '*Password is incorrect*';
          document.getElementById('loginSuccessMsg').innerHTML = '';
          document.getElementById('loginFail').innerHTML = '';
          break;
        }
      }
    })
  }

  /**
   * @description - Method that shows which user is logged in
   */
  indicateUserLoggedIn() {
    let loginBar = document.getElementById("login-header");
    loginBar.innerText = this.logInEmail.value.toLowerCase();
    sessionStorage.setItem("userEmail", this.logInEmail.value);
  }
 
// waits for the DOM to load before running app
}
document.addEventListener('DOMContentLoaded', function(){
  new App();
})

// Global variables
var globalImageObj = {};
var globalGalleryObj = {};

//Global Arrays
var globalGalleryObjArray = [];
var globalObjectArray = [];
var globalImportedPhotosArray = [];
var globalImportedAlbumsArray = [];
var globalGalleryImageArray = [];
var globalCardsArray = [];
