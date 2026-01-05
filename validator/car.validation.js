const Joi = require("joi");

exports.CarValidator = function(data) {
    const schema = Joi.object({
        automobile_name: Joi.string().min(5).trim().required(),
        brend: Joi.string().min(3).lowercase().trim().required(),
        horse_power: Joi.number().min(1).required(),
        year: Joi.number().min(1886).max(new Date().getFullYear()).required(),
        transmission: Joi.string().valid("mexanik", "avtomat").trim().required(),
        motor: Joi.number().required(),
        seats: Joi.number().min(2).max(9).required(),
        price: Joi.string().required(),
        distance: Joi.number().min(0).required(),
        color: Joi.string().lowercase().trim().required(),
        fuel_type: Joi.string().lowercase().valid("benzin", "gaz", "dizel", "elektr", "gibrid").trim().required(),
        tanirovka: Joi.string().valid("ha", "yo'q").trim().default("yo'q")
    });

    const { error, value } = schema.validate(data, { abortEarly: false });

    if (error) {
        return { error: error.details.map(e => e.message) };
    }

    return { value };
};
