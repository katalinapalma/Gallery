class NewImageScreen extends Screen{
  constructor() {
    let content = "New Images";
    super(content);
    this.createForm();
    this.addEventListeners();

  }
  createForm(){
    this.mainWrapper = document.getElementById('main-content-wrapper');
    this.theForm = document.createElement('form');
    this.urlInput = document.createElement('input');
    this.inputSubmit = document.createElement('input');
    this.inputName = document.createElement('input');
    this.textArea = document.createElement('textarea');

    this.urlInput.id = 'urlID';
    this.inputName.id = 'imageNameID';
    this.textArea.id = 'description';
    this.inputSubmit.id = 'submitButton';
    
    this.urlInput.type = 'url';
    this.urlInput.name = 'image';
    this.urlInput.placeholder = 'Type image url';

    this.inputName.type = 'text';
    this.inputName.name = 'imageName';
    this.inputName.placeholder = 'Name';

    this.textArea.placeholder = 'Description of image...';
    this.textArea.rows = '4';
    this.textArea.cols = '50';

    this.inputSubmit.type = 'submit';
    this.inputSubmit.value = 'submit';

    this.theForm.appendChild(this.urlInput);
    this.theForm.appendChild(this.inputName);
    this.theForm.appendChild(this.textArea);
    this.theForm.appendChild(this.inputSubmit);
    this.mainWrapper.appendChild(this.theForm);

    console.log(this.theForm);
  }

  addEventListeners(){
    this.theForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      globalImageObj = {
        url: this.theForm.urlID.value,
        name: this.theForm.imageNameID.value,
        description: this.theForm.description.value,
      }
      console.log(globalImageObj);
      this.theForm.reset();
    })
    
  }
  
}

