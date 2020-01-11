var getJsonData = {

  async getData(URL) {
    
      let jsonResponse = await fetch(URL).then(response => {return response.json();})
      console.log(jsonResponse);
  }
}