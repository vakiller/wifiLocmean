// Author VanhLe
//Get about information
module.exports.getAbout = function(req,res)
{
    res.render('about',{title : 'about'});
};