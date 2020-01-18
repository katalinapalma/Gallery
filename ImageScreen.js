class ImageScreen extends Screen {
  constructor(mode) {
    let content = "Images";
    super(content);
    this.mode = mode;
    this.createWrapper();
    
    switch(mode) {
      case 'Sidebar':
        this.ImportImagesBtn();
        this.displayImage();
        this.toggleButton.addEventListener("click", this.toggleMetaDataImages);
        break;
      case 'Album':
        this.displayAlbum();
        this.toggleButton.addEventListener("click", this.toggleMetaDataAlbums);
        break;
    }
  }
  createWrapper() {
    this.imgWrapper = document.createElement("div");
    this.imgWrapper.id = "image-wrapper";

    this.mainContentWrapper = document.getElementById("main-content-wrapper");
    this.mainContentWrapper.appendChild(this.imgWrapper);
  }
  displayButtons() {
      // creates btn div
      this.btnDiv = document.createElement('div');
      this.btnDiv.id = 'btndiv';
      this.mainContentWrapper = document.getElementById("main-content-wrapper");
      this.mainContentWrapper.appendChild(this.btnDiv);
  
      // creates import images button
      this.importBtn = document.createElement('button');
      this.importBtn.innerText = 'Import images';
      this.importBtn.id = 'import-images-button';
      this.btnDiv.appendChild(this.importBtn);
  
      // creates toggle meta data button
      this.toggleButton = document.createElement("button");
      this.toggleButton.id = "toggle-button";
      this.toggleButton.innerText = "Toggle metadata";
      this.btnDiv.appendChild(this.toggleButton);
      this.toggleButton.addEventListener("click", this.toggleMetaData);    
    

  }
  displayImage() {
    for(let i = 0;i<globalObjectArray.length;i++) {
      let imageCards = new ImageCard(i, globalObjectArray);
      globalCardsArray.push(imageCards);
    }
  }
  displayAlbum() {
    for(let i = 0;i<globalGalleryImageArray.length;i++) {
      let imageCards = new ImageCard(i, globalGalleryImageArray);
      globalCardsArray.push(imageCards);
    }
  }

  ImportImagesBtn() {
    let userID = sessionStorage.getItem("userID");

    if(userID) {
    this.importBtn.addEventListener('click', () => {
      
      let getImages = getJsonData.getData('https://jsonplaceholder.typicode.com/photos');
      getImages.then((jsonImages) => {

        let userID = sessionStorage.getItem("userID");
        
        
        for(let i = 0; i < jsonImages.length; i++) {

          let albumID = jsonImages[i].albumId;
          
          if(albumID == userID) {
            globalImportedPhotosArray.push(jsonImages[i]);
            
            for(let y = 0;y < globalImportedPhotosArray.length;y++ ) {
              globalImportedPhotosArray[y].name = jsonImages[i].title;
              globalImportedPhotosArray[y].description = '';
              globalImportedPhotosArray[y].gallery = jsonImages[i].albumId;
              globalImportedPhotosArray[y].button = 'Detele';
              
            } 
            globalObjectArray.push(globalImportedPhotosArray[i]);
          }
        }
        this.displayImage();
      })
      this.importBtn.disabled = true;
    })
    
  }
  }
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