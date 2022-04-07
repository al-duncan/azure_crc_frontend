window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApi = 'https://crcgetcounter.azurewebsites.net/api/crcgetcounter?code=rtxnwdfHhYnQFveV7JmqCYGHe3NONaQe33VIWg5c5Egdyl8p/YxRTQ==';

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