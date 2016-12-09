/* GET home page */
//Create an index export method
module.exports.index = function(req, res){
res.render('index', { title: 'Express' });
};
