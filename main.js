window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApi = 'https://crcgetcounter.azurewebsites.net/api/crcgetcounter?code=e9jcwDx5zSkkwkSnY6DabN0o2sC3Ou0uoMuxB1SQStMtAzFuree7fw==';

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