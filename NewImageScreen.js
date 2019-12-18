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
    this.theForm.setAttribute('id', 'formWrapper');
    this.urlInput = document.createElement('input');
    this.inputSubmit = document.createElement('input');
    this.inputName = document.createElement('input');
    this.textArea = document.createElement('textarea');

    this.urlInput.id = 'urlID';
    this.inputName.id = 'imageNameID';
    this.textArea.id = 'description';
    
    this.urlInput.type = 'url';
    this.urlInput.name = 'image';
    this.urlInput.placeholder = 'Type Your URL';

    this.inputName.type = 'text';
    this.inputName.name = 'imageName';
    this.inputName.placeholder = 'Name';

    this.textArea.placeholder = 'Description';
    this.textArea.rows = '4';
    this.textArea.cols = '50';

    this.inputSubmit.type = 'submit';
    this.inputSubmit.value = 'submit';

    
    this.mainWrapper.appendChild(this.theForm);
    this.theForm.appendChild(this.urlInput);
    this.theForm.appendChild(this.inputName);
    this.theForm.appendChild(this.textArea);
    this.theForm.appendChild(this.inputSubmit);
    console.log(this.theForm);
    
  }

  addEventListeners(){
    this.theForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      this.formData = {
        url: urlID.value,
        name: imageNameID.value,
        description: description.value,
      }
      console.log(this.theForm.urlID.value);
      console.log(this.formData);
    })
  }
}

