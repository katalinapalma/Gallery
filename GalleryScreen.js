/**
 * @description - Class that contains the UI for the gallery screen
 * contains functionality that creates new galleries and imports albums
 * @author Katalina, Ante & Karwan
 */
class GalleryScreen extends Screen{
  constructor() {
    let content = "";
    super(content);
    this.GalleryUI();
    this.galleryEventListeners();
    this.initModal();
    this.initImportButton();
  }

  /**
   * @description - Method that creatas the Gallery screen UI
   *  
   */
  GalleryUI() {
    this.mainContent = document.getElementById('main-content-wrapper'); 

    this.galleryContainer = document.createElement('div'); 
    this.mainContent.appendChild(this.galleryContainer); 
    this.galleryContainer.id = 'galleryContainer'; 
    
    this.gallerySectionLeft = document.createElement('section'); 
    this.galleryContainer.appendChild(this.gallerySectionLeft); 
    this.gallerySectionLeft.id = 'gallerySectionLeft';

    this.gallerySectionRight = document.createElement('section'); 
    this.galleryContainer.appendChild(this.gallerySectionRight); 
    this.gallerySectionRight.id = 'gallerySectionRight'; 

    // creates button for right section in gallery
    this.createGalleryButton = document.createElement('button');
    this.gallerySectionRight.appendChild(this.createGalleryButton);
    this.createGalleryButton.id = 'create-gallery-button';
    this.createGalleryButton.innerText = 'Create Gallery';

    // create a new button everytime the user creates a new gallery
    for (let i = 0;i<globalGalleryObjArray.length;i++){
      this.galleryBtn = document.createElement('button');
      this.galleryBtn.className = 'gallery-buttons';
      this.galleryBtn.id = 'gallery' + i;
      this.galleryBtn.innerText =  globalGalleryObjArray[i].title;
      this.gallerySectionLeft.appendChild(this.galleryBtn);
    }
    this.galleryEventListeners(this.gallerySectionLeft);
  }

  /**
   * @description - Listens when the user clicks on a new gallery/imported albums,
   *  opens the image screen with images that belongs to that gallery/album
   */
  galleryEventListeners(){
    this.gallerySectionLeft.addEventListener('click', (e) => { 
      if(e.target !== e.currentTarget) {
        let clickedBtn = e.target.innerText;
        
        globalGalleryImageArray = globalImportedAlbumsArray.filter((imageObject) => {
          return imageObject.gallery === clickedBtn;
        }); 
        ScreenHandler.changeScreen('Images', 'Album');
      }
    })
  }

  /**
   * @description - Method that creates the Create gallery modal
   * and creates the new galleries 
   */
  initModal(){
    this.mainContent = document.getElementById('main-content-wrapper');
    this.galleryButton = document.getElementById('create-gallery-button');

    this.galleryModal = document.createElement('div'); 
    this.galleryModal.className = 'modal'; 
    this.galleryModal.id = 'galleryModal'; 
    this.mainContent.appendChild(this.galleryModal);

    //Modal for gallery modal button
    this.modalContent = document.createElement('div'); 
    this.modalContent.className = 'modal-content-gallery'; 
    this.galleryModal.appendChild(this.modalContent);

    this.galleryForm = document.createElement('form'); 
    this.galleryName = document.createElement('input'); 
    this.galleryName.type = 'text'; 
    this.galleryName.placeholder = 'Gallery name...';

    this.createButton = document.createElement('button');
    this.createButton.innerText = 'Create'; 

    this.modalContent.appendChild(this.galleryForm);
    this.galleryForm.appendChild(this.galleryName);
    this.galleryForm.appendChild(this.createButton);

    //when user clicks on gallery modal button, the modal opens
    this.galleryButton.addEventListener('click', () => { 
      this.galleryModal.style.display = 'block';
    })

    // when the user creates a new gallery, a new object is created
    this.createButton.addEventListener('click', (e) => { 
      e.preventDefault();

      if (this.galleryName.value == 0) {
        alert('Please name your gallery');
      }else{
        globalGalleryObj = {
          title: this.galleryName.value,
        }
        this.createNewGallery();
        globalGalleryObjArray.push(globalGalleryObj);
      }
      this.galleryForm.reset();
    })

    //user can click anywhere on window to close modal
    window.addEventListener('click', (e) => { 
      if(e.target === this.galleryModal) {
        this.galleryModal.style.display = 'none';
      }
    })
  }

  /**
   * @description - Method that creates a new gallery button to the left section
   */
  createNewGallery(){
    // creates buttons to left section in gallery, depending on what the user names the gallery.
    if (globalGalleryObj.title == 0) {
      alert('Name your Gallery')
    } else {
        this.galleryBtn = document.createElement('button');
        this.galleryBtn.className = 'gallery-buttons';
        this.galleryBtn.id = 'gallery' + globalGalleryObjArray.length;
        this.galleryBtn.innerText =  globalGalleryObj.title;
        this.gallerySectionLeft.appendChild(this.galleryBtn);
      }
  }

/**
 * @description - Method that fetches albums and photos from jsonplaceholder
 * and matches albums to logged in user
 */
  initImportButton() {
    this.importButton = document.createElement("button");
    this.importButton.id = "import-button";
    this.importButton.innerText = "Import";
    this.gallerySectionRight.appendChild(this.importButton);

    this.importButton.addEventListener("click", () => {
      let userID = sessionStorage.getItem("userID");

      let getAlbums = getJsonData.getData('https://jsonplaceholder.typicode.com/albums');
      getAlbums.then((jsonAlbums) => {
        for(let i = 0; i < jsonAlbums.length; i++) {
          if(jsonAlbums[i].userId == userID) {
            globalGalleryObj = {
              title: jsonAlbums[i].title,
              id: jsonAlbums[i].id,
            }
            globalGalleryObjArray.push(jsonAlbums[i]);
            this.createNewGallery();
          }
        }

      let getPhotos = getJsonData.getData('https://jsonplaceholder.typicode.com/photos');
      getPhotos.then((jsonPhotos) => {
        for(let i = 0; i < jsonPhotos.length; i++) {
          for(let y = 0; y < jsonAlbums.length; y++) {
            if(jsonPhotos[i].albumId == jsonAlbums[y].id) {
              globalImageObj = {
                url: jsonPhotos[i].url,
                name: "",
                description: jsonPhotos[i].albumId,
                gallery: jsonAlbums[y].title,
                button: 'Delete',
              }
              globalImportedAlbumsArray.push(globalImageObj);                
              }
            }
          }
        })
      })
    }); 
  }
}