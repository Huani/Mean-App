/* GET home page */
//Create an index export method
module.exports.about = function(req, res){
res.render('generic-text', { title: 'About' });
};
