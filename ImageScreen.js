class ImageScreen extends Screen {
  constructor() {
    let content = "Images";
    super(content);
    this.displayImage();
    this.imgModal();
  }

  displayImage() {
    this.imgWrapper = document.createElement("div");
    this.imgWrapper.setAttribute("id", "image-wrapper");

    this.mainContentWrapper = document.getElementById("main-content-wrapper");
    this.mainContentWrapper.appendChild(this.imgWrapper);

    for(let i = 0;i<globalObjectArray.length;i++) {

      // Creating img elements
      this.imgName = document.createElement("h2");
      this.imgCard = document.createElement('div');
      this.imgText = document.createElement("p");
      this.removeButton = document.createElement('button');
      this.imgElement = document.createElement("img");

      //Setting ID
      this.imgName.id = 'imgNameId' + i;
      this.imgText.id = 'imgTextId' + i;
      this.removeButton.id = 'remove-button' + i;
      this.imgCard.id = 'imgCard' + i;

      //Setting class
      this.imgCard.className = 'card';
      this.removeButton.className = 'removeButtonClass';

      //Setting text
      this.imgName.innerText = globalObjectArray[i].name;
      this.imgText.innerText = globalObjectArray[i].description;
      this.removeButton.innerText = globalObjectArray[i].button;
 
      //Setting image source
      this.imgElement.src = globalObjectArray[i].url;
      globalObjectArray[i].filey();
    
      // Append everything
      this.imgWrapper.appendChild(this.imgCard);
      this.imgCard.appendChild(this.imgElement);
      this.imgCard.appendChild(this.imgName);
      this.imgCard.appendChild(this.imgText);
      this.imgCard.appendChild(this.removeButton);

      this.removeButton.addEventListener('click', (e) => {
        let btnWrapper = document.getElementById('image-wrapper');
        let remCard = document.getElementById('imgCard'+ i);
        btnWrapper.removeChild(remCard);
        globalObjectArray = [];
        globalImageObj = {};        
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
}

