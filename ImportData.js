class ImportData {
  constructor(type, url) {
    this.type = type;
    this.url = url;
  }
  
  
  getData(URL) {
    
    return fetch(URL)
    .then((response) => {
      return response.json();
    });
    
  }
}
