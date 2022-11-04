async function getResponse() {
    const response = await fetch("2GA3_Midterm_Cheat_Sheet.pdf", {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        redirect: "follow",
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline'
        }
    }).then((res)=>{
        console.log(res);
        return res;
    });
}3