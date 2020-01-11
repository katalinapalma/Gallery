class GalleryScreen extends Screen{
  constructor() {
    let content = "";
    super(content);
    this.GalleryUI();
    this.initModal();
    this.initImportButton();
  }

  GalleryUI() {
    this.mainContent = document.getElementById('main-content-wrapper'); //get the parent for the gallery div

    this.galleryContainer = document.createElement('div'); //creates div container to Gallery screen
    this.mainContent.appendChild(this.galleryContainer); //appends child
    this.galleryContainer.id = 'galleryContainer'; //gives div an id
    
    this.gallerySectionLeft = document.createElement('section'); //creates left div to Gallery screen
    this.galleryContainer.appendChild(this.gallerySectionLeft); //appends child to div container
    this.gallerySectionLeft.id = 'gallerySectionLeft'; //gives div an id

    this.gallerySectionRight = document.createElement('section'); //creates right div to Gallery screen
    this.galleryContainer.appendChild(this.gallerySectionRight); //appends child to div container
    this.gallerySectionRight.id = 'gallerySectionRight'; //gives div an id

    // creates button for right section in gallery
    this.galleryBtn3 = document.createElement('button');
    this.gallerySectionRight.appendChild(this.galleryBtn3);
    this.galleryBtn3.id = 'gallery-button3';
    this.galleryBtn3.innerText = 'Create Gallery';

    for (let i = 0;i<globalGalleryObjArray.length;i++){
      this.galleryBtn1 = document.createElement('button');
      this.galleryBtn1.className = 'gallery-buttons';
      this.galleryBtn1.innerText =  globalGalleryObjArray[i].name;
      this.gallerySectionLeft.appendChild(this.galleryBtn1);
    }
  }

  initModal(){
    this.mainContent = document.getElementById('main-content-wrapper');
    this.galleryButton = document.getElementById('gallery-button3');

    this.galleryModal = document.createElement('div'); //creates a new div for gallery modal
    this.galleryModal.className = 'modal'; // classname for the modal
    this.galleryModal.id = 'galleryModal'; //gives gallery modal div an id 
    this.mainContent.appendChild(this.galleryModal); //puts the gallery modal div under the wrapper

    //Modal for gallery modal button
    this.modalContent = document.createElement('div'); //creates div for gallery modal content
    this.modalContent.className = 'modal-content-gallery'; //gives the gallery modal div a class name
    this.galleryModal.appendChild(this.modalContent);

    this.galleryForm = document.createElement('form'); //creates gallery modal form 
    this.galleryName = document.createElement('input'); //input for name
    this.galleryName.type = 'text'; // type of text
    this.galleryName.placeholder = 'Gallery name...'; //a placeholder
    this.createButtonGallery = document.createElement('button'); //gallery modal button
    this.createButtonGallery.innerText = 'Create'; // text for the modal button

    

    this.modalContent.appendChild(this.galleryForm);
    this.galleryForm.appendChild(this.galleryName);
    this.galleryForm.appendChild(this.createButtonGallery);


    this.galleryButton.addEventListener('click', (e) => { //when user clicks on gallery modal button, the modal opens
      this.galleryModal.style.display = 'block';
    })
    
    this.createButtonGallery.addEventListener('click', (e) => { // when the user creates a new gallery, a new object is created
      e.preventDefault();

      if (this.galleryName.value == 0) {
        console.log('tomt');
      }else{
        globalGalleryObj = {
          name: this.galleryName.value,
        }
        console.log(globalGalleryObj);
        this.createNewGallery();
        globalGalleryObjArray.push(globalGalleryObj);
      }
      this.galleryForm.reset();
    })
    
    window.addEventListener('click', (e) => { //user can click anywhere on window to close modal
      if(e.target === this.galleryModal) {
        this.galleryModal.style.display = 'none';
      }
    })
  }

  createNewGallery(){
    // creates buttons to left section in gallery, depending on what the user names the gallery.
    if (globalGalleryObj.name == 0) {
      alert('Name your Gallery')
    }else{
        this.galleryBtn1 = document.createElement('button');
        this.galleryBtn1.className = 'gallery-buttons';
        this.galleryBtn1.innerText =  globalGalleryObj.name;
        this.gallerySectionLeft.appendChild(this.galleryBtn1);
    }
  }
  initImportButton() {

    this.importButton = document.createElement("button");
    this.importButton.id = "import-button";
    this.importButton.innerText = "Import";
    this.gallerySectionRight.appendChild(this.importButton);

    let URL = 'https://jsonplaceholder.typicode.com/albums';

    this.importButton.addEventListener("click", function() {

      fetch(URL).then(response => response.json()).then(json => console.log(json))

    })
  }
    
    
    // let galleryArraySame = globalGalleryObjArray.map();

    /*globalGalleryObjArray.forEach((element) =>{
      let n = element.name.includes(this.galleryName.value);
      if(n) {
        alert('Gallery already exist!');
      }else{
        this.galleryBtn1 = document.createElement('button');
        this.galleryBtn1.className = 'gallery-buttons';
        this.galleryBtn1.innerText =  globalGalleryObj.name;
        this.gallerySectionLeft.appendChild(this.galleryBtn1);
      }
    })*/
}