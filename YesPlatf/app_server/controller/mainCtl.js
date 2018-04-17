/* get default index */
module.exports.index = function(req,res){
    res.render('index',{title: "This is my index"});

}