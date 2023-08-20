const express = require('express');
const { recommend } = require('../controller/recommend.controller');


const router = exports.Router();

router.post("/recommend/:id", recommend);



module.exports = router;
