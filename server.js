const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; 

app.use(bodyParser.json());

app.post('/proxy', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:5000/fix_script', req.body, {
            headers: { 'Content-Type': 'application/json' },
        });

        res.send(response.data);
    } catch (error) {
        console.error('Error in proxy request:', error);
        res.status(500).send('Error forwarding request');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
