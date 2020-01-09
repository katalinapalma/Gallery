class NewImageScreen extends Screen{
  constructor() {
    let content = "New Images";
    super(content);
    this.createForm();
    this.addEventListeners();

  }
  createForm(){
    this.mainWrapper = document.getElementById('main-content-wrapper');
    this.formWrapper = document.createElement('div');
    this.theForm = document.createElement('form');
    this.urlInput = document.createElement('input');
    this.inputSubmit = document.createElement('input');
    this.inputName = document.createElement('input');
    this.textArea = document.createElement('textarea');
    this.fileInput = document.createElement('input');
    this.fileDisplayArea = document.createElement('pre');
    this.dropDownList = document.createElement('select');

    for(let i = 0;i<globalGalleryObjArray.length;i++){
      this.dropDownOption = document.createElement('option');
      this.dropDownOption.innerText = globalGalleryObjArray[i].name;
      this.dropDownList.appendChild(this.dropDownOption);
    }

    //set ID for div
    this.formWrapper.id = 'formWrapper';
    //Set ID for inputs
    this.urlInput.id = 'urlID';
    this.inputName.id = 'imageNameID';
    this.textArea.id = 'description';
    this.inputSubmit.id = 'submitButton';
    this.fileInput.id = 'fileInput';
    this.fileDisplayArea.id = 'file-display';
    this.dropDownList.id = 'dropdownList';
    this.dropDownList.name = 'Galleries';

    // URL attributes
    this.urlInput.type = 'url';
    this.urlInput.name = 'image';
    this.urlInput.placeholder = 'Type image url';

    // Image name attributes
    this.inputName.type = 'text';
    this.inputName.name = 'imageName';
    this.inputName.placeholder = 'Name';

    //Description attributes
    this.textArea.placeholder = 'Description of image...';
    this.textArea.rows = '4';
    this.textArea.cols = '50';

    //Submit button attributes
    this.inputSubmit.type = 'submit';
    this.inputSubmit.value = 'Submit';

    //File inpit attributes
    this.fileInput.type = 'file';
    this.fileInput.name = 'inputfile';

    //Dropdown options
    


    this.theForm.appendChild(this.urlInput);
    this.theForm.appendChild(this.inputName);
    this.theForm.appendChild(this.textArea);
    this.theForm.appendChild(this.dropDownList);
    this.theForm.appendChild(this.inputSubmit);
    this.theForm.appendChild(this.fileInput);
    this.theForm.appendChild(this.fileDisplayArea);
    this.mainWrapper.appendChild(this.formWrapper);
    this.formWrapper.appendChild(this.theForm);

  }

  addEventListeners(){
    let reader;
    this.theForm.addEventListener('submit', (event) => {
      event.preventDefault();
    
      globalImageObj = {
        url: this.theForm.urlID.value,
        name: this.theForm.imageNameID.value,
        description: this.theForm.description.value,
        button: 'Delete',
        gallery: this.theForm.dropdownList.selectedOptions[0].value,
        filey: function() {  
          if(reader) {
            this.url = reader.result;
          }
        }
      }
      
      globalObjectArray.push(globalImageObj);

      this.theForm.reset();
    });

    this.fileInput.addEventListener('change', (e) => {
      let file = this.fileInput.files[0];
      let fileType = /image.*/;

      if (file.type.match(fileType)) {
        reader = new FileReader();

        reader.addEventListener('load', (e) =>{
          this.fileDisplayArea.innerHTML = '';
          let img = new Image();
          img.src = reader.result;
          this.fileDisplayArea.appendChild(img);
        })
        reader.readAsDataURL(file);
      }
      else {
        this.fileDisplayArea.innerHTML = 'File not supported';
      }
    });
    
  }
  
}

