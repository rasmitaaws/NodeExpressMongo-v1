const express = require('express');
const router = express.Router();
router.get("/api/1.0/bcms/page/homepage", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});
router.get("/api/1.0/bcms/page/homepage/id", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});
module.exports = router;

