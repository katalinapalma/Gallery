/**
 * @description - Class that contains the form  and functionality to upload images both locally and online
 * @author Ante & Karwan
 */
class NewImageScreen extends Screen{
  constructor() {
    let content = "New Images";
    super(content);
    this.createForm();
    this.addEventListeners();
  }

  /**
   * @description - method that creates the form in the new Image screen
   *  The form allows the user to input url, a name, a description, a gallery and post a local image
   */
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
      this.dropDownOption.innerText = globalGalleryObjArray[i].title;
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

  /**
   * @description - method that listens when the user submits the form
   *  when submitted, we create an image object with its properties
   * 
   */
  addEventListeners(){
    let reader;
    let listOption = document.getElementById("dropdownList");
    this.theForm.addEventListener('submit', (event) => {
      event.preventDefault();
    
      globalImageObj = {
        url: this.theForm.urlID.value,
        name: this.theForm.imageNameID.value,
        description: this.theForm.description.value,
        button: 'Delete',
        gallery: "None",
        setGallery: function() {
          if(listOption.options.length > 0) {

          for(let i = 0; listOption.options.length;i++) {
            let opt = listOption.options[i];
            if(opt.selected === true) {
              globalImageObj.gallery = opt.value;
              break;
            }
          }
        }
        },
        filey: function() {  
          if(reader) {
            this.url = reader.result;
          }
        }
      }
      
      globalImageObj.setGallery();
      globalImageObj.filey();
      globalObjectArray.push(globalImageObj);
      globalImportedAlbumsArray.push(globalImageObj); //Add new image to imported albums so user can find, the new image when clicking on a user-created gallery
      this.theForm.reset();
      if (this.fileDisplayArea.contains(this.img)) {
        this.fileDisplayArea.removeChild(this.img);
        
      }  
    });

    this.fileInput.addEventListener('change', () => {
      let file = this.fileInput.files[0];
      let fileType = /image.*/;

      if (file.type.match(fileType)) {
        reader = new FileReader();

        reader.addEventListener('load', () =>{
          this.fileDisplayArea.innerHTML = '';
          this.img = new Image();
          this.img.src = reader.result;
          this.fileDisplayArea.appendChild(this.img);
        })
        reader.readAsDataURL(file);
      }
      else {
        this.fileDisplayArea.innerHTML = 'File not supported';
      }
    });
  }
}

