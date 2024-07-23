import Joi from "joi";

export const signUpSchema = Joi.object({
    name: Joi
        .string()
        .min(3)
        .required()
        .messages({
            'string.base': `Name should be a type of 'text'`,
            'string.min': `Name should have a minimum length of {#limit}`,
            'string.empty': `Name cannot be empty`,
            'any.required': `Name is required`,
        }),
    userName: Joi
        .string()
        .min(3)
        .required()
        .messages({
            'string.base': `Username should be a type of 'text'`,
            'string.min': `Username should have a minimum length of {#limit}`,
            'string.empty': `Username cannot be empty`,
            'any.required': `Username is required`,
        }),
    email: Joi
        .string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.empty': `Email cannot be empty`,
            'string.min': `Email should have a minimum length of {#limit}`,
            'string.max': `Email should have a maximum length of {#limit}`,
            'string.email': `Email must be a valid email address`,
            'any.required': `Email is required`,
        }),
    password: Joi
        .string()
        .min(6)
        .required()
        .messages({
            'string.empty': `Password cannot be empty`,
            'string.min': `Password should have a minimum length of {#limit}`,
            'any.required': `Password is required`,
        }),
});
