var express = require('express');
var router = express.Router();

/* GET home page. */
var locationCtl = require('../controller/locationCtl');
var otherCtl = require('../controller/otherCtl');
var db = require('../models/db');
router.get('/',locationCtl.listWifi);
router.get('/location/:name',locationCtl.locationInfo);
router.get('/location/review/new',locationCtl.addReview);
router.get('/about',otherCtl.getAbout);
module.exports = router;
