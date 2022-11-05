function getResponse() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        mode: "cors"
      };
    fetch("https://github.com/err53/oscs/releases/download/latest/2c03-midterm.pdf", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}