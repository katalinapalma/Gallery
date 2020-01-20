/**
 * @description - Class that creates the image cards
 * contains functionality to remove images from the screen/object
 * contains functionality to get the image modal from another class
 * @author Karwan, Katalina & Ante
 */
class ImageCard {
    constructor(i, image){
        this.i = i;
        this.image = image;
        this.imageCardinit();
    }

    /**
     * @description - Method that creates the "cards" for the images
     * The user can also edit meta data + style it
     */
imageCardinit(){
    this.imgWrapps = document.getElementById('image-wrapper');
    this.mainContentWrapper = document.getElementById("main-content-wrapper");
    this.mainContentWrapper.appendChild(this.imgWrapps);

     // Creating img elements
     this.imgName = document.createElement("p");
     this.imgText = document.createElement("p");
     this.imgCard = document.createElement('div');
     this.metaDataContainer = document.createElement('div');
     this.removeButton = document.createElement('button');
     this.imgElement = document.createElement("img");

     // Gallery
     this.galleryText = document.createElement("p");
     this.galleryText.className = "galleryText";
     this.galleryText.innerText = "Gallery: " + this.image[this.i].gallery;

     //Setting ID
     this.imgName.id = 'imgNameId' + this.i;
     this.imgText.id = 'imgTextId' + this.i;
     this.removeButton.id = 'remove-button' + this.i;
     this.imgCard.id = 'imgCard' + this.i;
     this.metaDataContainer.id = 'meta-container' + this.i;

     //Setting class
     this.metaDataContainer.className = 'metaContainer';
     this.imgCard.className = 'card';
     this.removeButton.className = 'removeButtonClass';
     this.imgName.className = 'imgNameClass';

     //Setting text
     this.imgName.innerHTML = this.image[this.i].name;
     this.imgText.innerHTML = this.image[this.i].description;
     this.removeButton.innerText = this.image[this.i].button;

     //Setting image source
     this.imgElement.src = this.image[this.i].url;
     
     // Append everything
     this.imgWrapps.appendChild(this.imgCard);
     this.imgCard.appendChild(this.imgElement);
     this.imgCard.appendChild(this.metaDataContainer);
     this.metaDataContainer.appendChild(this.imgName);
     this.metaDataContainer.appendChild(this.imgText);
     this.imgCard.appendChild(this.galleryText);
     this.imgCard.appendChild(this.removeButton);

     this.removeButton.addEventListener('click', (e) => {
       e.stopPropagation();
       let btnWrapper = document.getElementById('image-wrapper');
       let remCard = document.getElementById('imgCard'+ this.i);
       btnWrapper.removeChild(remCard);
       this.image.splice(this.i, 1);
     });

    //when user clicks on image, the image modal opens
    this.imgCard.addEventListener('click', () => { 
      let image = new ImageModal(this.image[this.i].url,
        this.image[this.i].description, 
        this.image[this.i].name)

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
            document.execCommand('bold');
          })

          image.underLineButton.addEventListener('click', (e) =>{
            e.stopPropagation();
            document.execCommand('underline');
          })

          image.sizeButton.addEventListener('click', (e) =>{
            e.stopPropagation();
            document.execCommand('fontSize','false', '7');            
          })

         image.myForm.addEventListener('submit', (e) => {
          e.preventDefault();
            // depending on the input of the name or text, it will change the name/description in the object array
            this.image[this.i].name = this.inputNewName.innerHTML;
            this.imgName.innerHTML = this.inputNewName.innerHTML;
            this.image[this.i].description = this.inputNewText.innerHTML;
            this.imgText.innerHTML = this.inputNewText.innerHTML;
      })
    })
  }
}
