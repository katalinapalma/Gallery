/**
 * @description - Class that creates and contains the imagescreen structure
 * contains functionality to import images and to toggle between metadatas
 * @author Katalina & Ante
 */
class ImageScreen extends Screen {
  constructor(mode) {
    let content = "Images";
    super(content);
    this.mode = mode;
    this.createWrapper();
    this.displayButtons();
    
    switch(mode) {
      case 'Sidebar':
        this.importImgsEventListener();
        this.displayImage();
        this.toggleButton.addEventListener("click", this.toggleMetaDataImages);
        break;
      case 'Album':
        this.displayAlbum();
        this.toggleButton.addEventListener("click", this.toggleMetaDataAlbums);
        break;
    }
  }

  /**
   * @description - method that creates the image wrapper
   */
  createWrapper() {
    this.imgWrapper = document.createElement("div");
    this.imgWrapper.id = "image-wrapper";

    this.mainContentWrapper = document.getElementById("main-content-wrapper");
    this.mainContentWrapper.appendChild(this.imgWrapper);
  }

  /**
   * @description - method that creates the import images button & toggle metadata button
   */
  displayButtons() {
    // creates btn div
    this.btnDiv = document.createElement('div');
    this.btnDiv.id = 'btndiv';
    this.mainContentWrapper = document.getElementById("main-content-wrapper");
    this.mainContentWrapper.appendChild(this.btnDiv);

    // creates import images button
    this.importImgsButton = document.createElement('button');
    this.importImgsButton.innerText = 'Import images';
    this.importImgsButton.id = 'import-images-button';
    this.btnDiv.appendChild(this.importImgsButton);

    // creates toggle meta data button
    this.toggleButton = document.createElement("button");
    this.toggleButton.id = "toggle-button";
    this.toggleButton.innerText = "Toggle metadata";
    this.btnDiv.appendChild(this.toggleButton);
    this.toggleButton.addEventListener("click", this.toggleMetaData);    
  }

  /**
   * @description - method that displays the cards with images
   */
  displayImage() {
    for(let i = 0;i<globalObjectArray.length;i++) {
      let imageCards = new ImageCard(i, globalObjectArray);
      globalCardsArray.push(imageCards);
    }
  }

  /**
   * @description - Method that displays the images from imported albums
   */
  displayAlbum() {
    for(let i = 0;i<globalGalleryImageArray.length;i++) {
      let imageCards = new ImageCard(i, globalGalleryImageArray);
      globalCardsArray.push(imageCards);
    }
  }

  /**
   * @description - method that fetches images from JSONplaceHolder & import images based on the logged in user 
   */
  importImgsEventListener() {
    let userID = sessionStorage.getItem("userID");

    if(userID && globalObjectArray.length == 0) {
      this.importImgsButton.addEventListener('click', () => {
        
        let getImages = getJsonData.getData('https://jsonplaceholder.typicode.com/photos');
        getImages.then((jsonImages) => { 
          for(let i = 0; i < jsonImages.length; i++) {

            let albumID = jsonImages[i].albumId;
            
            if(albumID == userID) {
              globalImportedPhotosArray.push(jsonImages[i]);
              
              for(let y = 0;y < globalImportedPhotosArray.length;y++ ) {
                globalImportedPhotosArray[y].name = jsonImages[i].title;
                globalImportedPhotosArray[y].description = '';
                globalImportedPhotosArray[y].gallery = jsonImages[i].albumId;
                globalImportedPhotosArray[y].button = 'Delete'; 
              } 
              globalObjectArray.push(globalImportedPhotosArray[i]);
            }
          }
          this.displayImage();
        })
        this.importImgsButton.disabled = true;
      })
    }
  }

  /**
   * @description - method that toggles the metadata on every card
   */
  toggleMetaDataImages() {
    for(let i = 0;i<globalObjectArray.length;i++) {
      var x = document.getElementsByClassName("metaContainer")[i];
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
  }

  /**
   * @description - method that toggles the metadata on every album card
   */
  toggleMetaDataAlbums() {
    for(let i = 0;i<globalGalleryImageArray.length;i++) {
      var x = document.getElementsByClassName("metaContainer")[i];
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
  }
}