class ImageCard {
    constructor(i){
        this.i = i;
        this.imageCardinit();
    }

imageCardinit(){
    this.imgWrapps = document.getElementById('image-wrapper');
    this.mainContentWrapper = document.getElementById("main-content-wrapper");
    this.mainContentWrapper.appendChild(this.imgWrapps);

     // Creating img elements
     this.imgName = document.createElement("p");
     this.imgCard = document.createElement('div');
     this.imgText = document.createElement("p");
     this.removeButton = document.createElement('button');
     this.imgElement = document.createElement("img");

     // Gallery
     this.galleryText = document.createElement("p");
     this.galleryText.className = "galleryText";
     this.galleryText.innerText = "Gallery: " + globalFilteredImageArray[this.i].gallery;

     //Setting ID
     this.imgName.id = 'imgNameId' + this.i;
     this.imgText.id = 'imgTextId' + this.i;
     this.removeButton.id = 'remove-button' + this.i;
     this.imgCard.id = 'imgCard' + this.i;

     //Setting class
     this.imgCard.className = 'card';
     this.removeButton.className = 'removeButtonClass';
     this.imgName.className = 'imgNameClass';

     //Setting text
     this.imgName.innerText = globalFilteredImageArray[this.i].name;
     this.imgText.innerText = globalFilteredImageArray[this.i].description;
     this.removeButton.innerText = globalFilteredImageArray[this.i].button;

     //Setting image source

     this.imgElement.src = globalFilteredImageArray[this.i].url;
     
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
       globalFilteredImageArray.splice(this.i, 1);
       e.stopPropagation();
     });

    this.imgCard.addEventListener('click', () => { //when user clicks on image, the image modal opens
      let image = new ImageModal(globalObjectArray[this.i].url,
         globalObjectArray[this.i].description, 
         globalObjectArray[this.i].name)

         //removes the name and text on the modal
          image.imageMetaName.innerText = '';
          image.imageMetaText.innerText = '';
        //creates a form in the modal so the user can type the name or text
          this.inputNewName = document.createElement('div');
          this.inputNewText = document.createElement('div');

          this.inputNewName.setAttribute('contenteditable', 'true');
          this.inputNewText.setAttribute('contenteditable', 'true');
          
          this.inputNewName.id = 'newNameInput';
          this.inputNewText.id = 'newTextInput';
          this.inputNewName.innerHTML = '';

          image.myForm.appendChild(this.inputNewText);
          image.myForm.appendChild(this.inputNewName);
          
          image.boldButton.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('bold');
            
            document.execCommand('bold');
          })

          image.underLineButton.addEventListener('click', (e) =>{
            e.stopPropagation();
            document.execCommand('underline');

          })

          image.sizeButton.addEventListener('click', (e) =>{
            e.stopPropagation();
            document.execCommand('fontSize','false', '10');            
          })

         image.myForm.addEventListener('submit', (e) => {
          e.preventDefault();
            // depending on the input of the name or text, it will change the name/description in the object array
            globalObjectArray[this.i].name = this.inputNewName.textContent;
            this.imgName.innerHTML = this.inputNewName.textContent;
            globalObjectArray[this.i].description = this.inputNewText.textContent;
            this.imgText.innerHTML = this.inputNewText.textContent;
            let bitchass = window.getComputedStyle(this.inputNewName, null);
            console.log(bitchass);
            
      })
    })
  }
}