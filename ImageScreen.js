class ImageScreen extends Screen{
  constructor() {
    let content = "Images";
    super(content);
    this.displayImage();
  }
  displayImage() {

    let imgWrapper = document.createElement("div");
    imgWrapper.setAttribute("id", "image-wrapper");

    this.mainContentWrapper = document.getElementById("main-content");
    this.mainContentWrapper.appendChild(imgWrapper);

    let imgElement = document.createElement("img");
    imgElement.src = "https://pbs.twimg.com/profile_images/638747380494503936/C89d1hl3_400x400.jpg";
    imgWrapper.appendChild(imgElement);

  }
}



































/*
***@ Event that listens for clicks on specific ID, a function runs depending on what you click.

function initNavigtaion() {
    // Get the IDs from the links so we can seperate them when we click
    imgNav = document.getElementById('h2nav1');
    imgNav.addEventListener('click', clickNewImage);
    newImgNav = document.getElementById('h2nav2');
    newImgNav.addEventListener('click', clickImages);
    galleryNav = document.getElementById('h2nav3');
    galleryNav.addEventListener('click', clickGalleries);
}

function clickNewImage() {
    let newTextRef = document.getElementById("maincontent-h1");
    newTextRef.innerText = "New Image";
    document.getElementById("main-content-wrapper").innerHTML = " ";
    createForm();
}
function clickImages() {
    let newTextRef = document.getElementById("maincontent-h1");
    newTextRef.innerText = "Images";
    document.getElementById("main-content-wrapper").innerHTML = " ";
    displayImage();
}
function clickGalleries() {
   let newTextRef = document.getElementById("maincontent-h1");
   newTextRef.innerText = "Galleries";
   document.getElementById("main-content-wrapper").innerHTML = " ";
}


window.onload = function init(){
  header();
  wrapperDiv();
  sidebar();
  sidebarH2();
  maincontent();
  initNavigtaion();
}


// created header div with id 'header'
function header() {
  let headerDiv = document.createElement('div');
  headerDiv.setAttribute('id', 'header');
  document.body.appendChild(headerDiv);
  console.log(headerDiv); //comment out later

  //  created h1 inside the header div, with id 'header-h1'
  let headerH1 = document.createElement('h1');
  headerH1.setAttribute('id', 'header-h1');
  headerDiv.appendChild(headerH1);
  headerH1.innerText = 'Gallery application 2000';
}

function wrapperDiv() {
  // created wrapper div
  let wrapperDiv = document.createElement('div');
  wrapperDiv.setAttribute('id', 'wrapper');
  document.body.appendChild(wrapperDiv);
}

function sidebar() {
  let sidebarDiv = document.createElement('div'); //create sidebar div
  sidebarDiv.setAttribute('id', 'sidebar');
  document.getElementById('wrapper').appendChild(sidebarDiv);
  
  let sidebarH2Div = document.createElement('div'); //create div for h2
  sidebarDiv.appendChild(sidebarH2Div);
  sidebarH2Div.setAttribute('id', 'sidebar-h2');
  console.log(wrapperDiv); //comment out later
}

// create h2 text with different 
function sidebarH2() {
  let h2Text = ['New image', 'Images', 'Galleries'];

  for(let i=0;i< h2Text.length;i++) {
    let h2Element = document.createElement("h2");
    document.getElementById("sidebar-h2").appendChild(h2Element);
    h2Element.className = "sbH2";
    h2Element.innerHTML = h2Text[i];
    h2Element.id = "h2nav" + (i+1);
  }
}



function maincontent() {
  //create div with main content id
  let mainContentDiv = document.createElement('div'); //create maincontent div
  mainContentDiv.setAttribute('id', 'main-content'); //setting id to div
  document.getElementById('wrapper').appendChild(mainContentDiv);

  let mainContentH1 = document.createElement('h1'); //create h1 inside maincontent
  mainContentH1.setAttribute('id', 'maincontent-h1');
  mainContentH1.innerText = 'Images';
  mainContentDiv.appendChild(mainContentH1);

  let mainContentWrapper = document.createElement("div");
  mainContentWrapper.setAttribute("id", "main-content-wrapper");
  mainContentDiv.appendChild(mainContentWrapper);
}

/**
 * @param img  Takes an image object as a parameter to display on the image screen
=======
 * @desc Creates the image element and adds it to the DOM
 * @param img  The image object to be displayed
function displayImage() {
  
  let formRef = document.getElementById("form1");
  let formData = new FormData(formRef);
  let imageWrapper = document.getElementById("main-content-wrapper");

  let imageArray = formData.getAll("url");
  imageArray.forEach(function(element) {
    let imageElement = document.createElement("img");
    imageElement.src = element;
    imageWrapper.appendChild(imageElement);
  })
  
  

  
}


/**
 * @desc Creates form by HTML
function createForm() {
  let formWrapper = document.getElementById("main-content-wrapper");
  formWrapper.innerHTML = "<form id='form1' action=''> <input type='url' name='url' id='url' placeholder='Image URL'> <br> <input type='text' name='firstname' placeholder='Name'> <br> <textarea rows='4' cols='50' name='subject' placeholder='Description'></textarea> <br> <input type='submit' name='submit' value='submit'> ";
}
/**
* @desc Saves form input data into var formData
function saveData() {
  let formRef = document.getElementById("form1");
  let formData = new FormData(formRef);
  
}


let newImagesScreen = {

} */