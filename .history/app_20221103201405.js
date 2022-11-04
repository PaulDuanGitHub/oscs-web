import {} from "pdfjs-dist";

async function getResponse() {
    const response = await fetch("2GA3_Midterm_Cheat_Sheet.pdf", {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        headers: {

        }
    }).then( res => res.blob() )
    .then( blob => {
        console.log(blob);
        var link=document.createElement('a');
        link.href=window.URL.createObjectURL(blob);
        link.target="_blank";
        link.click();
    });
}