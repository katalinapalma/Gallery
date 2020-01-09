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
      this.galleryText = document.createElement("p");
      

      // Gallery
      this.galleryText = document.createElement("p");
      this.galleryText.className = "galleryText";
      this.galleryText.innerText = "Gallery: " + globalObjectArray[i].gallery;
      console.log(globalObjectArray[i].gallery);

      //Setting ID
      this.imgName.id = 'imgNameId' + i;
      this.imgText.id = 'imgTextId' + i;
      this.removeButton.id = 'remove-button' + i;
      this.imgCard.id = 'imgCard' + i;
      this.galleryText.id = "galleryTextId" + i;
      

      //Setting class
      this.imgCard.className = 'card';
      this.removeButton.className = 'removeButtonClass';
      this.galleryText.className = "galleryTextClass";

      //Setting text
      this.imgName.innerText = globalObjectArray[i].name;
      this.imgText.innerText = globalObjectArray[i].description;
      this.removeButton.innerText = globalObjectArray[i].button;
      this.galleryText.innerText = "Gallery: ";
      
 
      //Setting image source
      this.imgElement.src = globalObjectArray[i].url;
      globalObjectArray[i].filey();

      //Gallery selection



      




      for(let i = 0;i<globalGalleryObjArray.length;i++){

        this.gallerySelectionWrapper = document.createElement("div");
        this.gallerySelectionWrapper.className = "dropdown";
        
        this.imgCard.appendChild(this.gallerySelectionWrapper);
        this.attachGalleryButton = document.createElement("button");
        this.attachGalleryButton.id = "gallery-button" + i;
        this.attachGalleryButton.className = "dropbtn";
        this.attachGalleryButton.onclick = () => {
          this.galleryDropdownList.classList.toggle("show");
        }
        this.attachGalleryButton.innerText = "Attach";
        this.gallerySelectionWrapper.appendChild(this.attachGalleryButton);
        this.galleryDropdownList = document.createElement("div");
        this.galleryDropdownList.id = "myDropdown" + i;
        this.galleryDropdownList.className = "dropdown-content";
        this.gallerySelectionWrapper.appendChild(this.galleryDropdownList);
        this.galleryOption = document.createElement("a");
        this.galleryOption.id = 'gallery-option' + i;
        this.galleryOption.innerText = globalGalleryObjArray[i].name;

        this.galleryDropdownList.appendChild(this.galleryOption);
        this.galleryOption.addEventListener("click", () => {
          this.galleryText.innerHTML = "Gallery: " + globalGalleryObjArray[i].name; 
        })
      }
      

      
      // Append everything
      this.imgWrapper.appendChild(this.imgCard);
      this.imgCard.appendChild(this.imgElement);
      this.imgCard.appendChild(this.imgName);
      this.imgCard.appendChild(this.imgText);
      this.imgCard.appendChild(this.galleryText);
      this.imgCard.appendChild(this.removeButton);
      

      this.removeButton.addEventListener('click', (e) => {
        let btnWrapper = document.getElementById('image-wrapper');
        let remCard = document.getElementById('imgCard'+ i);
        btnWrapper.removeChild(remCard);
        globalObjectArray = [];
        globalImageObj = {};
      });
      // Close the dropdown menu if the user clicks outside of it
      window.addEventListener("click", (e) => {
        if (!e.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      })

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

  /* When the user clicks on the button,
      toggle between hiding and showing the dropdown content */
  toggleDropdown(i) {
    document.getElementById("myDropdown" + i)
  }
  
}

