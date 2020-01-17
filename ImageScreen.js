class ImageScreen extends Screen {
  constructor() {
    let content = "Images";
    super(content);
    this.displayImage();
    this.ImportImagesBtn();
  }

  displayImage() {
    this.imgWrapper = document.createElement("div");
    this.imgWrapper.setAttribute("id", "image-wrapper");

    this.mainContentWrapper = document.getElementById("main-content-wrapper");
    this.mainContentWrapper.appendChild(this.imgWrapper);
    
    for(let i = 0;i<globalFilteredImageArray.length;i++) {
      let imageCards = new ImageCard(i);
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
            globalFilteredImageArray.push(items);
            
            for(let y = 0;y < globalFilteredImageArray.length;y++ ) {
              globalFilteredImageArray[y].name = items.title;
              globalFilteredImageArray[y].description = '';
              globalFilteredImageArray[y].gallery = items.albumId;
              globalFilteredImageArray[y].button = 'Detele';
            } 
          }
        }
        this.displayImage();
      })
    })
  }
}
