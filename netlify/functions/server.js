const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<html><body><h1>Hello World</h1></body></html>');
});

app.use('/.netlify/functions/server', router);

module.exports.handler = serverless(app);
