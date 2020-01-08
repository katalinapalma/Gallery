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

    // Set welcome message in header if user is not logged in
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

    this.loginModal = document.createElement('div'); //creates a new div for log in modal
    this.loginModal.className = 'modal'; //gives log in modal div a class name 
    this.loginModal.id = 'loginModal'; //gives log in modal div an id 
    bodyRef.appendChild(this.loginModal); //puts the log in modal div under the log in button

    //Modal for log in button
    this.modalContent = document.createElement('div'); //creates div for log in modal content
    this.modalContent.className = 'modal-content'; //gives the log in modal div a class name
    this.loginModal.appendChild(this.modalContent); //puts the content inside the log in modal

    this.spanCloseButton = document.createElement('span'); //creates span
    this.spanCloseButton.className = 'close'; //gives span a class name
    this.spanCloseButton.innerText = 'X'; //adds icon to close the log in modal
    this.modalContent.appendChild(this.spanCloseButton); //puts span inside log in modal content div

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
    this.emailError = document.createElement('div'); //email error message
    this.emailError.id = 'emailError';
    this.passwordError = document.createElement('div'); // password error message
    this.passwordError.id = 'pswError';
    this.loginSuccessful = document.createElement('div'); // login successful message
    this.loginSuccessful.id = 'loginSuccessMsg';
    this.loginFailMsg = document.createElement('div'); // login successful message
    this.loginFailMsg.id = 'loginFail';

    //appends children to the modal content div
    this.modalContent.appendChild(this.logInForm);
    this.logInForm.appendChild(this.loginNameLabel);
    this.logInForm.appendChild(this.logInEmail);
    this.logInForm.appendChild(this.loginPasswordLabel);
    this.logInForm.appendChild(this.logInPassword);
    this.logInForm.appendChild(this.logInButton2);
    this.logInForm.appendChild(this.emailError);
    this.logInForm.appendChild(this.passwordError);
    this.logInForm.appendChild(this.loginSuccessful);
    this.logInForm.appendChild(this.loginFailMsg);

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
  /**
   * @desc Checks if input email and password matches database
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

    for(let i = 0; i<this.users.length;i++) {      
      if(this.logInEmail.value == this.users[i].email && this.logInPassword.value == this.users[i].address.suite) {
        document.getElementById('loginSuccessMsg').innerHTML = 'Login Successful';
        document.getElementById('loginFail').innerHTML = ''; 
        this.indicateUserLoggedIn(); 
        break;
      }
      else if (this.logInEmail.value != this.users[i].email) {
        document.getElementById('loginFail').innerHTML = '*User does not exist*';
        document.getElementById('loginSuccessMsg').innerHTML = '';
        passWordErrorRef.innerHTML = '';
        break;
      }
      else if (this.logInPassword.value != this.users[i].address.suite){
        passWordErrorRef.innerHTML = '*Password is incorrect*';
        document.getElementById('loginSuccessMsg').innerHTML = '';
        document.getElementById('loginFail').innerHTML = '';
        break;
      }
    }
  }
  
  getUsers(){
    let url  = 'https://jsonplaceholder.typicode.com/users';
    
    let xhr  = new XMLHttpRequest();
    
    xhr.open('GET', url, true);
    
    xhr.addEventListener('load',  () => {

      this.users = JSON.parse(xhr.responseText);
    
      if (xhr.readyState == 4 && xhr.status == '200') {
        console.log(this.users);
        this.validateLogin();
      } else {
        console.error(users);
      }
    });
    
    xhr.send();
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
    
    this.logInButton2.addEventListener('click', (e) => {
      if(this.users){
        this.validateLogin();
      } else {
        this.getUsers();
      }
      e.preventDefault();
    })

  }
  indicateUserLoggedIn() {
    let loginBar = document.getElementById("login-header");
    loginBar.innerText = this.logInEmail.value;

    sessionStorage.setItem("userEmail", this.logInEmail.value);
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
var  globalObjectArray = [];

