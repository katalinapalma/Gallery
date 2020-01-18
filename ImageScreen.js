class ImageScreen extends Screen {
  constructor() {
    let content = "Images";
    super(content);
    this.displayButtons();
    this.displayImage();
    this.ImportImagesBtn();
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
    let userID = sessionStorage.getItem("userID");

    if(userID) {
      this.importBtn.addEventListener('click', () => {
        let getImages = getJsonData.getData('https://jsonplaceholder.typicode.com/photos');
        getImages.then((jsonImages) => {          
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
        this.importBtn.disabled = true;
      })
    }
  }

  toggleMetaData() {
    for(let i = 0;i<globalFilteredImageArray.length;i++) {
      var x = document.getElementsByClassName("metaContainer")[i];
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
  }
}
