class GalleryScreen extends Screen{
  constructor() {
    let content = "";
    super(content);
    this.GalleryUI();
    this.initModal();
  }

  GalleryUI() {
    this.mainContent = document.getElementById('main-content-wrapper'); //get the parent for the gallery div

    this.galleryContainer = document.createElement('div'); //creates div container to Gallery screen
    this.mainContent.appendChild(this.galleryContainer); //appends child
    this.galleryContainer.id = 'galleryContainer'; //gives div an id
    
    this.gallerySectionLeft = document.createElement('section'); //creates left div to Gallery screen
    this.galleryContainer.appendChild(this.gallerySectionLeft); //appends child to div container
    this.gallerySectionLeft.id = 'gallerySectionLeft'; //gives div an id

    // creates button to left section
    this.galleryBtn1 = document.createElement('button');
    this.gallerySectionLeft.appendChild(this.galleryBtn1);
    this.galleryBtn1.id = 'gallery-button1';
    this.galleryBtn1.innerText = 'Gallery 1';

    this.galleryBtn2 = document.createElement('button');
    this.gallerySectionLeft.appendChild(this.galleryBtn2);
    this.galleryBtn2.id = 'gallery-button2';
    this.galleryBtn2.innerText = 'Gallery 2';

    this.gallerySectionRight = document.createElement('section'); //creates right div to Gallery screen
    this.galleryContainer.appendChild(this.gallerySectionRight); //appends child to div container
    this.gallerySectionRight.id = 'gallerySectionRight'; //gives div an id

    this.galleryBtn3 = document.createElement('button');
    this.gallerySectionRight.appendChild(this.galleryBtn3);
    this.galleryBtn3.id = 'gallery-button3';
    this.galleryBtn3.innerText = 'Create Gallery';

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
    this.modalContent.appendChild(this.galleryName);
    this.modalContent.appendChild(this.createButtonGallery);


    this.galleryButton.addEventListener('click', (e) => { //when user clicks on gallery modal button, the modal opens
      this.galleryModal.style.display = 'block';
    })
    
    this.createButtonGallery.addEventListener('click', (e) => { // when the user creates a new gallery, a new object is created

     let galleryObj = {
        name: this.galleryName.value,
      }
      e.preventDefault();
    })
    
    window.addEventListener('click', (e) => { //user can click anywhere on window to close modal
      if(e.target === galleryModal) {
        this.galleryModal.style.display = 'none';
      }
    })
  }
}