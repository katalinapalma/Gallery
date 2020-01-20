/**
 * @description - Class that contains the Basic UI for all screens
 * contains method to remove previous content
 * @author Katalina, Karwan & Ante
 */
class Screen {
  constructor(content) {
    this.content = content;
    this.initElement();
  }

  /**
   * @description - Method that creates the UI for every screen on the application
   */
  initElement(){
    this.main = document.getElementById('main-content'); 

    this.wrapper = document.createElement("div");
    this.wrapper.setAttribute("id", "main-content-wrapper");
    this.main.appendChild(this.wrapper);
    
    let mainContentH1 = document.createElement('h1');
    mainContentH1.setAttribute('id', 'maincontent-h1');
    mainContentH1.innerText = this.content;
    this.wrapper.appendChild(mainContentH1);
  }
  
  /**
   * @description - method that removes the previous content
   */
  removeMe(){
    this.main.removeChild(this.wrapper);
  }
}