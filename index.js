const express = require('express');
const helmet = require('helmet');

const server = express();
const port = process.env.PORT || 4000;

server.use(helmet());
server.use(express.json());

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        errorMessage: "A server error has occured"
    })
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})