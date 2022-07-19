window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApi = 'https://azurecrcapi.azurewebsites.net/api/azurecrcAPI?code=hcVUcGgW_INeza_pdttXVNm7BnrapGFh2L6hu9NqLciZAzFuLb4DBg==';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
    .then(response => {
        return response.text()
    })
    .then(response => {
        console.log("Website called function API.",response);
        count = response;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}