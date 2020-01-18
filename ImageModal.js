class ImageModal {
    constructor(url, description, name) {

        this.url = url;
        this.description = description;
        this.name = name;
        this.initElement();
    }
  
    initElement(){
      //creating image modal 
        this.imgWrapper = document.getElementById('image-wrapper');

        this.imageModalRef = document.createElement('div'); //creates image modal div
        this.imageModalRef.id = 'image-modal'; //gives image modal div an id

            this.myForm = document.createElement('form');
            this.imageRef = document.createElement('img'); //creates image element
            this.imageMetaName = document.createElement('h2');
            this.imageMetaText = document.createElement('p');
            this.modalSubmit = document.createElement('input');
            this.styleButtonWrapper = document.createElement('div');
            this.boldButton = document.createElement('button');
            this.underLineButton = document.createElement('button');
            this.sizeButton = document.createElement('button');


            this.imageRef.id = 'image-modal-content'; //gives id to image element
            this.imageMetaName.id = 'model-image-name';
            this.imageMetaText.id = 'model-image-text';
            this.modalSubmit.id = 'mySubmitModal';
            this.myForm.id = 'myFormId';
            this.styleButtonWrapper.id = 'styleButtonWrapper';

            this.modalSubmit.className = 'modalSubmit';
            this.imageRef.className = 'imageRefModal'; //gives className to image element
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

        this.imgWrapper.appendChild(this.imageModalRef); //appends image modal div to image wrapper
        this.imageModalRef.appendChild(this.imageRef); //appends image element to image modal
        this.imageModalRef.appendChild(this.styleButtonWrapper);
        this.styleButtonWrapper.appendChild(this.boldButton);
        this.styleButtonWrapper.appendChild(this.underLineButton);
        this.styleButtonWrapper.appendChild(this.sizeButton);
        this.imageModalRef.appendChild(this.myForm);
        this.myForm.appendChild(this.imageMetaName);
        this.myForm.appendChild(this.imageMetaText);
        this.myForm.appendChild(this.modalSubmit);
        
        
/*
        this.imageMetaName.addEventListener('click', () => {
            this.imageMetaName.innerText = ''; // removes the original meta name when you click on it
            this.imageMetaNameEdit = document.createElement('input');
            this.imageMetaNameEdit.id = 'metaNameEdit';
            this.imageMetaNameEdit.type = 'text';
            this.imageMetaNameEdit.name = 'Name edit';
            this.myForm.appendChild(this.imageMetaNameEdit);
        })

        this.imageMetaText.addEventListener('click', () => {
            console.log('input');
            this.imageMetaText.innerText = ''; // removes the original meta text when you click on it
            this.imageMetaTextEdit = document.createElement('textarea');
            this.imageMetaTextEdit.id = 'metaTextEdit';
            this.imageMetaTextEdit.rows = '4';
            this.imageMetaTextEdit.cols = '45';
            this.myForm.appendChild(this.imageMetaTextEdit);
        })
        this.myForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log(e);
            globalObjectArray[i].name = this.imageMetaNameEdit.value;
            //globalImageObj.description = this.myForm.metaTextEdit.value;
            this.oldassName.innerText = this.imageMetaNameEdit.value; 
            
        })
*/
        window.addEventListener('click', (e) => { //user can click anywhere on window to close image
        if(e.target === this.imageModalRef) {
            this.imageModalRef.style.display = 'none';
            }
        })
    }
  }
