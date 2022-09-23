const Joi = require('joi');

const userSchema = Joi.object({
displayName: Joi.string().min(8).required(),
email: Joi.string().email().required(), // https://joi-tester.corneroftheinternet.rocks/public/html/docs.html#stringemailoptions
password: Joi.string().min(6).required(),
image: Joi.string(),
});

module.exports = {
userSchema,
};