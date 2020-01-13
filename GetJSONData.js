var getJsonData = {

  getData(URL) {
    
    return fetch(URL)
    .then((response) => {
      return response.json();
    });
    
  }
} 