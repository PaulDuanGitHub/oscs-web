async function getResponse() {
    const response = await fetch("2GA3——Midterm_Cheat_Sheet", {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline',
            'filename': "filename.pdf"
        }
    }).then( res => res.blob() )
    .then( blob => {
        console.log(blob);
      var file = window.URL.createObjectURL(blob);
    //   window.location.assign(file);
    });
}3