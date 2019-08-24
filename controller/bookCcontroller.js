const request = require("request");

module.exports = {
    
    getBookText: function(req, res) {
        console.log(req.params.id);
        request.get({
            url: 'https://api.yuuvis.io/dms/objects/' + req.params.id  + '/contents/file',
            headers: { 
                "Content-Type":"application/json",
                "Ocp-Apim-Subscription-Key":"cb19c65493e14beeab9a38302aeb0801"
            }
        
        },
        function (e, r, body) {
            res.json(body);
        })
    }
}