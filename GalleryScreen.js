class GalleryScreen extends Screen{
  constructor() {
    let content = "";
    super(content);
    this.GalleryUI();
  }

  GalleryUI() {
    this.mainContent = document.getElementById('main-content-wrapper'); //get the parent for the gallery div

    this.galleryContainer = document.createElement('div'); //creates div container to Gallery screen
    this.mainContent.appendChild(this.galleryContainer); //appends child
    this.galleryContainer.id = 'galleryContainer'; //gives div an id
    
    this.gallerySectionLeft = document.createElement('section'); //creates left div to Gallery screen
    this.galleryContainer.appendChild(this.gallerySectionLeft); //appends child to div container
    this.gallerySectionLeft.id = 'gallerySectionLeft'; //gives div an id

    // creates button to left section
    this.galleryBtn1 = document.createElement('button');
    this.gallerySectionLeft.appendChild(this.galleryBtn1);
    this.galleryBtn1.id = 'gallery-button1';
    this.galleryBtn1.innerText = 'Gallery 1';

    this.galleryBtn2 = document.createElement('button');
    this.gallerySectionLeft.appendChild(this.galleryBtn2);
    this.galleryBtn2.id = 'gallery-button2';
    this.galleryBtn2.innerText = 'Gallery 2';

    this.gallerySectionRight = document.createElement('section'); //creates right div to Gallery screen
    this.galleryContainer.appendChild(this.gallerySectionRight); //appends child to div container
    this.gallerySectionRight.id = 'gallerySectionRight'; //gives div an id

    this.galleryBtn3 = document.createElement('button');
    this.gallerySectionRight.appendChild(this.galleryBtn3);
    this.galleryBtn3.id = 'gallery-button3';
    this.galleryBtn3.innerText = 'Create Gallery';

    
  }
}