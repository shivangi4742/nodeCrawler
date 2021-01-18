const express = require('express');
const apiController = require('./api.controller');
const router = express.Router();


router.get("/url", apiController.getDataForMovies); // localhost:3000/api/v1/users

module.exports = router;