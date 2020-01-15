var ScreenHandler = {
  activeScreen: null,
  changeScreen: function(screenType, mode){
    if(this.activeScreen) {
      this.activeScreen.removeMe();
    }

    switch(screenType) {
      case 'New Image':
        this.activeScreen = new NewImageScreen();
        break;
      case 'Images':
        this.activeScreen = new ImageScreen(mode);
        break;
      case 'Gallery':
        this.activeScreen = new GalleryScreen();
        break;
      default:
        this.activeScreen = new NewImageScreen();
    }
  }
}