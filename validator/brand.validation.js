const Joi = require("joi");

exports.BrandValidator = function(data) {
    const schema = Joi.object({
        name: Joi.string().min(5).lowercase().trim().required(),
        country: Joi.string().trim().required()
    });

    const { error, value } = schema.validate(data, { abortEarly: false });

    if (error) {
        return { error: error.details.map(e => e.message) };
    }

    return { value };
};
