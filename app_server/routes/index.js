var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main'); //req mainCTRL




/* GET home page. */
router.get('/', ctrlMain.index);
module.exports = router;


/* test
var homepageController = function (req, res) {
res.render('index', { title: 'Express' });
};


 GET home page.
router.get('/', homepageController);
*/

module.exports = router;
