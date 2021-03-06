const expressJwt = require('express-jwt');
const secret="barisyalcinkose"

function jwt() {
    return expressJwt({
        secret,algorithms:['HS256']
    }).unless({
        path:[
            '/api/user/login',
            '/api/user/register',
        ]
    })
    
}

module.exports=jwt;