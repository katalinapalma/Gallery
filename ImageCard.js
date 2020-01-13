class ImageCard {
    constructor(i){
        console.log('whore 2');
        this.i = i;
        this.imageCardinit();
    }

imageCardinit(){
    console.log('in loop');

    this.imgWrapps = document.getElementById('image-wrapper');
    this.mainContentWrapper = document.getElementById("main-content-wrapper");
    this.mainContentWrapper.appendChild(this.imgWrapps);

    // Creating img elements
    this.imgName = document.createElement("h2");
    this.imgCard = document.createElement('div');
    this.imgText = document.createElement("p");
    this.removeButton = document.createElement('button');
    this.imgElement = document.createElement("img");
    this.modalNameChange = document.getElementById('metaNameEdit');

    // Gallery
    this.galleryText = document.createElement("p");
    this.galleryText.className = "galleryText";
    this.galleryText.innerText = "Gallery: " + globalObjectArray[this.i].gallery;

    //Setting ID
    this.imgName.id = 'imgNameId' + this.i;
    this.imgText.id = 'imgTextId' + this.i;
    this.removeButton.id = 'remove-button' + this.i;
    this.imgCard.id = 'imgCard' + this.i;

    //Setting class
    this.imgCard.className = 'card';
    this.removeButton.className = 'removeButtonClass';

    //Setting text
    this.imgName.innerText = globalObjectArray[this.i].name;
    this.imgText.innerText = globalObjectArray[this.i].description;
    this.removeButton.innerText = globalObjectArray[this.i].button;

    //Setting image source
    globalObjectArray[this.i].filey();
    this.imgElement.src = globalObjectArray[this.i].url;
    
    // Append everything
    this.imgWrapps.appendChild(this.imgCard);
    this.imgCard.appendChild(this.imgElement);
    this.imgCard.appendChild(this.imgName);
    this.imgCard.appendChild(this.imgText);
    this.imgCard.appendChild(this.galleryText);
    this.imgCard.appendChild(this.removeButton);

    this.removeButton.addEventListener('click', (e) => {
      let btnWrapper = document.getElementById('image-wrapper');
      let remCard = document.getElementById('imgCard'+ this.i);
      btnWrapper.removeChild(remCard);
      globalObjectArray = [];
      globalImageObj = {};
    });

    this.imgCard.addEventListener('click', () => { //when user clicks on image, the image modal opens
      let image = new ImageModal(globalObjectArray[this.i].url,
         globalObjectArray[this.i].description, 
         globalObjectArray[this.i].name)

         //removes the name and text on the modal
          image.imageMetaName.innerText = '';
          image.imageMetaText.innerText = '';
        //creates a form in the modal so the user can type the name or text
          this.inputNewName = document.createElement('input');
          this.inputNewText = document.createElement('textarea');

          this.inputNewName.id = 'newNameInput';
          this.inputNewName.type = 'name';
          this.inputNewName.placeholder = 'Type the new name';
          this.inputNewName.maxLength = '30';

          this.inputNewText.id = 'newTextInput';
          this.inputNewText.maxLength = '50';

          image.myForm.appendChild(this.inputNewText);
          image.myForm.appendChild(this.inputNewName);

         image.myForm.addEventListener('submit', (e) => {
          e.preventDefault();
            // depending on the input of the name or text, it will change the name/description in the object array
            globalObjectArray[this.i].name = this.inputNewName.value;
            this.imgName.innerText = this.inputNewName.value;  
            globalObjectArray[this.i].description = this.inputNewText.value;
            this.imgText.innerText = this.inputNewText.value;  
      })
    })
  }
}