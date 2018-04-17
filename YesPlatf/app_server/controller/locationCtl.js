//Author Vanh Le 
var locations=[{
    name: 'Thư viện ACTVN',
    distance:'100m',
    address: '141 Chiến Thắng,Xã Tân Triều,Huyện Thanh Trì',
    rating:4,
    facilities:['Books','Study','Learning']
},{
    name: 'Quán Cafe Bánh mì ăn như cức',
    distance:'300m',
    address: '254 Chiến Thắng,Xã Tân Triều,Huyện Thanh Trì',
    rating:1,
    facilities:['Foods','Cafe','Working']
},{
    name: 'Circle K',
    distance:'200m',
    address: '139 Chiến Thắng,Xã Tân Triều,Huyện Thanh Trì',
    rating:4,
    facilities:['Foods','Working','Learning']
}];
module.exports.listWifi = function(req,res)
{
    res.render('index',{title : "Danh sách Wifi",greeting : "Welcome to my wifi list",detail:"Here is all the location with wifi near by you now...",locations})
};
module.exports.locationInfo = function(req,res)
{
    var name = req.params['name'];
    for(i=0;i<locations.length;i++)
    {
        if(locations[i].name===name)
        {
            res.render('location',{title : "Location Info",location : locations[i]});
        }
    }
    
};
module.exports.addReview = function(req,res)
{
    res.render('addReview',{title : "Review This place",greeting : "Thư Viện ACTVN"})
};