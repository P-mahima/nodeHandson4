let arr = []
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
// const secretkey = 'jnkhgdnkoiyrxcc'

const saltround = 10;

const register = async (request, response) => {
    const details = request.body;

    const find = arr.find((item) => details.email === item.email)
    if(find){
        return response.send({msg:"mail is already used"})
    }
    // to generate string in bcrypt 
    const stringBcrypt = bcrypt.genSaltSync(10)
    console.log(stringBcrypt)
    //---------------------------------------

    const hashPassword = await bcrypt.hash(details.password , saltround)
    console.log(hashPassword)

    const data = {
        name : details.name,
        phone : details.phone,
        email : details.email,
        password : hashPassword,
    }
    arr.push(data)
   const token = jwt.sign({email:details.email}, process.env.secretkey,{expiresIn:'1d'})
    response.send({msg : 'user is registered' , result: data , token : token})
}



const login = async (request , response) => {
    const details = request.body;

    const find = arr.find((item) => details.email === item.email)
    if(!find){
        return response.send({msg : 'user is not registered'})
    }
    const validate = await bcrypt.compare(details.password, find.password)
    if(!validate){
        return response.status(401).send({msg : 'password is wrong'})
    }
    const token = jwt.sign({email:details.email}, process.env.secretkey,{expiresIn:'3600'})
    response.status(200).send({msg : 'user is login sucessfully', token : token})
}

module.exports = {register ,  login}


 // https://node-handson4.onrender.com/register
 //https://node-handson4.onrender.com/login