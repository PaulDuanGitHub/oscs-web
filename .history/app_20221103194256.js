async function getResponse() {
    return await fetch("https://github.com/err53/oscs/releases/download/latest/2c03-midterm.pdf", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline',
            'filename': "filename.pdf"
        }
    });
} 