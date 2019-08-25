const request = require("request");

module.exports = {
    getBooks: function(req, res){ 
       request.post({
        url: 'https://api.yuuvis.io/dms/objects/search',
        body: req.body,
        json: true,
        headers: { 
           "Content-Type":"application/json",
           "Ocp-Apim-Subscription-Key":"cb19c65493e14beeab9a38302aeb0801"
        },
        method: 'POST'
       },
     
       function (e, r, body) {
           res.json(body);
       });
    }
}
