class Screen {
  constructor(content) {
    this.content = content;
    this.initElement();
  }

  initElement(){
    this.main = document.getElementById('main-content'); //setting id to div

    this.wrapper = document.createElement("div");
    this.wrapper.setAttribute("id", "main-content-wrapper");
    this.main.appendChild(this.wrapper);
    
    let mainContentH1 = document.createElement('h1'); //create h1 inside maincontent
    mainContentH1.setAttribute('id', 'maincontent-h1');
    mainContentH1.innerText = this.content;
    this.wrapper.appendChild(mainContentH1);
  }
  
  removeMe(){
    this.main.removeChild(this.wrapper);
  }
}