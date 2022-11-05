import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());

// Get all releases files
app.get('/getReleases', async (req, res) => {
    const resp = await fetch('https://api.github.com/repos/err53/oscs/releases?tag_name=latest');
    resp.json().then(
        data => {
            res.send(data);
        }
    )
})

// Get pdf and send it to client
app.get('/getPDF', async (req, res) => {
    var fileName = req.query.file;
    console.log(`https://github.com/err53/oscs/releases/download/latest/${fileName}`);
    const resp = await fetch(`https://github.com/err53/oscs/releases/download/latest/${fileName}`);
    res.setHeader('Content-Type', 'application/pdf');
    resp.body.pipe(res);
});

app.listen('9000');
console.log("Listen on port 9000");