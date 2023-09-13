const jwt = require('jsonwebtoken')

const firstMiddleware = (request, response , next) => {
    const barrier = request.headers['authorization'];
    
    if(barrier === undefined){
        return response.send({msg : "no token"})
    }
    const token = barrier.split(" ")[1];
    //barrier jkfkfkjfjjfjf *for the middle space between we have to split*
    console.log(token)
    if(token === undefined){
        return response.send({msg : "user not authorised person or session expired"})
    }
    const validate = jwt.verify(token, process.env.secretkey);
    if(validate){
        return next()
    }
    return response.send({msg : 'not authorised for the particular resources'})
}

module.exports = firstMiddleware;