
// function that creates the div wrapper for the 3 links, we also create the 3 links and give them IDs
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
}
function clickImages() {
    let newTextRef = document.getElementById("maincontent-h1");
    newTextRef.innerText = "Images";
}
function clickGalleries() {
   let newTextRef = document.getElementById("maincontent-h1");
   newTextRef.innerText = "Galleries";
}

window.addEventListener('load', function() {
    init();
});


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
};

function wrapperDiv() {
  // created wrapper div
  let wrapperDiv = document.createElement('div');
  wrapperDiv.setAttribute('id', 'wrapper');
  document.body.appendChild(wrapperDiv);
};

function sidebar() {
  let sidebarDiv = document.createElement('div'); //create sidebar div
  sidebarDiv.setAttribute('id', 'sidebar');
  document.getElementById('wrapper').appendChild(sidebarDiv);
  
  let sidebarH2Div = document.createElement('div'); //create div for h2
  sidebarDiv.appendChild(sidebarH2Div);
  sidebarH2Div.setAttribute('id', 'sidebar-h2');
  console.log(wrapperDiv); //comment out later
};

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
};



function maincontent() {
  //create div with main content id
  let mainContentDiv = document.createElement('div'); //create maincontent div
  mainContentDiv.setAttribute('id', 'main-content'); //setting id to div
  document.getElementById('wrapper').appendChild(mainContentDiv);

  let mainContentH1 = document.createElement('h1'); //create h1 inside maincontent
  mainContentH1.setAttribute('id', 'maincontent-h1');
  mainContentH1.innerText = 'Images';
  mainContentDiv.appendChild(mainContentH1);
};

/**
 * @desc Creates the image element and adds it to the DOM
 * @param img  Image to be displayed
 */
function displayImage(img) {
  let imageWrapper = document.getElementById("img-wrapper");
  let imageElement = document.createElement("img");
  imageElement.src = img.src;
  imageWrapper.appendChild(imageElement);
}


/**
 * @desc Creates form by HTML
 */
function createForm() {
  let formWrapper = document.getElementsByTagName("body")[0]; // Change this to where form should be placed
  formWrapper.innerHTML = "<form action='javascript:saveData();'> <input type='url' name='url' id='url' placeholder='Image URL'> <br> <input type='submit' name='submit' value='submit'>";
}
/**
* @desc Saves form input data into var formData
*/
function saveData() {
  let formData = document.getElementById('url').value;
}