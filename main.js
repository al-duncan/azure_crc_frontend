window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApi = 'https://azurecrcapi.azurewebsites.net/api/azurecrcAPI?code=tC8kTTgurmAuaiObdA9fQ2IZwgUrtdvU6OJxsmmy_8kVAzFuL48oGQ==';

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