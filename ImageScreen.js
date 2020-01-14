class ImageScreen extends Screen {
  constructor() {
    let content = "Images";
    super(content);
    this.displayImage();
    this.imgModal();
    this.ImportImagesBtn();
  }

  displayImage() {
    this.imgWrapper = document.createElement("div");
    this.imgWrapper.setAttribute("id", "image-wrapper");

    this.mainContentWrapper = document.getElementById("main-content-wrapper");
    this.mainContentWrapper.appendChild(this.imgWrapper);
    
    for(let i = 0;i<globalFilteredImageArray.length;i++) {

      // Creating img elements
      this.imgName = document.createElement("h2");
      this.imgCard = document.createElement('div');
      this.imgText = document.createElement("p");
      this.removeButton = document.createElement('button');
      this.imgElement = document.createElement("img");

      // Gallery
      this.galleryText = document.createElement("p");
      this.galleryText.className = "galleryText";
      this.galleryText.innerText = "Gallery: " + globalFilteredImageArray[i].gallery;

      //Setting ID
      this.imgName.id = 'imgNameId' + i;
      this.imgText.id = 'imgTextId' + i;
      this.removeButton.id = 'remove-button' + i;
      this.imgCard.id = 'imgCard' + i;

      //Setting class
      this.imgCard.className = 'card';
      this.removeButton.className = 'removeButtonClass';

      //Setting text
      this.imgName.innerText = globalFilteredImageArray[i].name;
      this.imgText.innerText = globalFilteredImageArray[i].description;
      this.removeButton.innerText = globalFilteredImageArray[i].button;
 
      //Setting image source
      
      this.imgElement.src = globalFilteredImageArray[i].url;
      
      // Append everything
      this.imgWrapper.appendChild(this.imgCard);
      this.imgCard.appendChild(this.imgElement);
      this.imgCard.appendChild(this.imgName);
      this.imgCard.appendChild(this.imgText);
      this.imgCard.appendChild(this.galleryText);
      this.imgCard.appendChild(this.removeButton);

      this.removeButton.addEventListener('click', (e) => {
        let btnWrapper = document.getElementById('image-wrapper');
        let remCard = document.getElementById('imgCard'+ i);
        btnWrapper.removeChild(remCard);
        globalFilteredImageArray.splice(i, 1);
      });

      this.imgModal(this.imgElement)
     
    }
  }

  imgModal() { 
    //creating image modal 
    this.imageModal = document.createElement('div'); //creates image modal div
    this.imageModal.id = 'image-modal'; //gives image modal div an id
    this.imgWrapper.appendChild(this.imageModal); //appends image modal div to image wrapper

    this.imageModalContent = document.createElement('img'); //creates image element
    this.imageModalContent.id = 'image-modal-content'; //gives id to image element
    this.imageModal.appendChild(this.imageModalContent); //appends image element to image modal
    
    if(this.imgElement) {
      this.imgElement.addEventListener('click', (e) => { //when user clicks on image, the image modal opens
        this.imageModal.style.display = 'block';
        this.imageModalContent.src = e.target.src;
      });
    }
  
    window.addEventListener('click', (e) => { //user can click anywhere on window to close image
      if(e.target === this.imageModal) {
        this.imageModal.style.display = 'none';
      }
    })
  }

  ImportImagesBtn() {
    this.importBtn = document.createElement('button');
    this.importBtn.innerText = 'Import images';
    this.importBtn.id = 'import-images-button';
    this.mainContentWrapper.appendChild(this.importBtn);

    this.importBtn.addEventListener('click', () => {
      let getImages = getJsonData.getData('https://jsonplaceholder.typicode.com/photos');
      getImages.then((jsonImages) => {
        
        let userID = sessionStorage.getItem("userID");
        let items = [jsonImages];
        let albumID = items.albumId;
        // console.log('items', items);
        // console.log('albumid', albumID);
        
        for(let i = 0; i < jsonImages.length; i++) {
          let items = jsonImages[i];
          console.log('items', items);
          

          // if(this.albumID === this.userID) {  
          //   globalFilteredImageArray.push(items);
          //   globalFilteredImageArray[i].name = items.title;
          //   globalFilteredImageArray[i].description = '';
          //   globalFilteredImageArray[i].gallery = items.albumId;
          //   globalFilteredImageArray[i].button = "Delete";

          //   this.displayImage();

          // }
        } 
      })
    })
  }

}
