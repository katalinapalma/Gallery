class ImageScreen extends Screen {
  constructor() {
    let content = "Images";
    super(content);
    this.displayImage();
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

  /*imgModal() { 
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
    }*/

  }
}


