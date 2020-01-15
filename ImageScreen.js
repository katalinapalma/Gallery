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
        break;
      case 'Album':
        this.displayAlbum();
        break;
      case 'Photos':
    }
  }
  createWrapper() {
    this.imgWrapper = document.createElement("div");
    this.imgWrapper.id = "image-wrapper";

    this.mainContentWrapper = document.getElementById("main-content-wrapper");
    this.mainContentWrapper.appendChild(this.imgWrapper);
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
    this.btnDiv = document.createElement('div');
    this.btnDiv.id = 'btndiv';
    this.mainContentWrapper.appendChild(this.btnDiv);
    this.importBtn = document.createElement('button');
    this.importBtn.innerText = 'Import images';
    this.importBtn.id = 'import-images-button';
    this.btnDiv.appendChild(this.importBtn);

    this.importBtn.addEventListener('click', () => {
      
      let getImages = getJsonData.getData('https://jsonplaceholder.typicode.com/photos');
      getImages.then((jsonImages) => {

        let userID = sessionStorage.getItem("userID");
        
        
        for(let i = 0; i < jsonImages.length; i++) {
          let items = jsonImages[i];
          let albumID = items.albumId;
          
          if(albumID == userID) {
            globalImportedPhotosArray.push(items);
            
            for(let y = 0;y < globalImportedPhotosArray.length;y++ ) {
              globalImportedPhotosArray[y].name = items.title;
              globalImportedPhotosArray[y].description = '';
              globalImportedPhotosArray[y].gallery = items.albumId;
              globalImportedPhotosArray[y].button = 'Detele';
            } 
          }
        }
        this.displayImage();
      })
    })
  }
}
  