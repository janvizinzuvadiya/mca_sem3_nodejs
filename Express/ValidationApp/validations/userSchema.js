import joi from 'joi';

const userSchema = joi.object({
    name: joi.string().min(2).max(30).required(), 
    email: joi.string().email().required(),
    age: joi.number().min(18).max(60).required()
});

export default userSchema;