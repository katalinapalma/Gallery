/**
 * @description - static object to fetch JSONdata
 * @author Ante
 */
var getJsonData = {
  getData(URL) {
    return fetch(URL)
    .then((response) => {
      return response.json();
    });
  }
} 
