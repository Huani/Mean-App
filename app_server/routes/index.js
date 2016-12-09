var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');  //req controller files (2)
var ctrlOthers = require('../controllers/others');
//var ctrlMain = require('../controllers/main'); //req mainCTRL




/* GET home page. */
/*router.get('/', ctrlMain.index);
module.exports = router; */


/* Locations pages */
router.get('/', ctrlLocations.homelist);  // home page is a list of locations
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);


/* Other pages */
router.get('/about', ctrlOthers.about);

/* test
var homepageController = function (req, res) {
res.render('index', { title: 'Express' });
};


 GET home page.
router.get('/', homepageController);
*/

module.exports = router;
