const Joi = require('joi');

const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])')),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})


const validate=(req,res,next)=>{
    const {value,error} = schema.validate(req.body)
    if(error)
    {
        
        const errorMessage=error.details?.map((detail)=>detail.message).join(", ")
        let response = {
            status: false,
            message:errorMessage,
        }
        res.status(200).send(response)
        return;
    }
    Object.assign(req,value)
    return next()
}
module.exports=validate