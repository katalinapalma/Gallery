/**
 * @description - Class that creates the image Modal & functionality to close it
 * @author Katalina & Karwan
 */
class ImageModal {
    constructor(url, description, name) {
        this.url = url;
        this.description = description;
        this.name = name;
        this.initImageModalElement();
    }

  /**
   * @description - Method that creates the modal for images
   */
    initImageModalElement(){
      //creating image modal 
        this.imgWrapper = document.getElementById('image-wrapper');

        this.imageModalRef = document.createElement('div'); 
        this.imageModalRef.id = 'image-modal'; 

        this.myForm = document.createElement('form');
        this.imageRef = document.createElement('img');
        this.imageMetaName = document.createElement('h2');
        this.imageMetaText = document.createElement('p');
        this.modalSubmit = document.createElement('input');
        this.styleButtonWrapper = document.createElement('div');
        this.boldButton = document.createElement('button');
        this.underLineButton = document.createElement('button');
        this.sizeButton = document.createElement('button');

        // Sets ID:s
        this.imageRef.id = 'image-modal-content'; 
        this.imageMetaName.id = 'model-image-name';
        this.imageMetaText.id = 'model-image-text';
        this.modalSubmit.id = 'mySubmitModal';
        this.myForm.id = 'myFormId';
        this.styleButtonWrapper.id = 'styleButtonWrapper';

        // Sets Classnames
        this.modalSubmit.className = 'modalSubmit';
        this.imageRef.className = 'imageRefModal'; 
        this.imageMetaName.className = 'imgMetaName';
        this.imageMetaText.className = 'imgMetaText';
        this.boldButton.className = 'bold';
        this.underLineButton.className = 'Underline';
        this.sizeButton.className = 'fontSize';

        this.modalSubmit.type = 'submit';
        this.modalSubmit.value = 'Edit';
        this.boldButton.innerText = 'B';
        this.underLineButton.innerText = 'U';
        this.sizeButton.innerText = 'Size';

        this.imageModalRef.style.display = 'block';
        
        this.imageRef.src = this.url;
        this.imageMetaName.textContent = this.name;
        this.imageMetaText.textContent = this.description;

        this.imgWrapper.appendChild(this.imageModalRef); 
        this.imageModalRef.appendChild(this.imageRef); 
        this.imageModalRef.appendChild(this.styleButtonWrapper);
        this.styleButtonWrapper.appendChild(this.boldButton);
        this.styleButtonWrapper.appendChild(this.underLineButton);
        this.styleButtonWrapper.appendChild(this.sizeButton);
        this.imageModalRef.appendChild(this.myForm);
        this.myForm.appendChild(this.imageMetaName);
        this.myForm.appendChild(this.imageMetaText);
        this.myForm.appendChild(this.modalSubmit);
        
        //user can click anywhere on window to close image
        window.addEventListener('click', (e) => { 
        if(e.target === this.imageModalRef) {
            this.imageModalRef.style.display = 'none';
            }
        })
    }
  }
