const express = require('express');
const { recommend } = require('../controller/recommend.controller');
const { getFormation, addFormation } = require('../controller/formation.controller');
const { getUser, addUser } = require('../controller/user.controller');


const router = express.Router();



router.get("/recommend/:id", recommend);

//routes pour les formations
router.get('/formation', getFormation);
router.post('/formation', addFormation);


//routes pours les users
router.get("/user", getUser);
router.post("/user", addUser);



module.exports = router;
