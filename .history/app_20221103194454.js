async function getResponse() {
    const response =
    return await fetch("https://github.com/err53/oscs/releases/download/latest/2c03-midterm.pdf", {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline',
            'filename': "filename.pdf"
        }
    });
} 