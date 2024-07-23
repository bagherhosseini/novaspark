import Joi from "joi";

export const signInSchema = Joi.object({
    email: Joi
        .string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.empty': `Email cannot be an empty field`,
            'string.min': `Email should have a minimum length of {#limit}`,
            'string.max': `Email should have a maximum length of {#limit}`,
            'string.email': `Email must be a valid email address`,
            'any.required': `Email is a required field`,
        }),
    password: Joi
        .string()
        .required()
        .messages({
            'string.empty': `Password cannot be an empty field`,
            'any.required': `Password is a required field`,
        }),
});
