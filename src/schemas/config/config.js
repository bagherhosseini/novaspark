import Joi from "joi";
// import { Environment } from 'src/constants/enum';

export const configSchema = Joi.object({
    // NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),

    REACT_APP_BLANK_TECH_BASE_URL: Joi.string().required(),
    REACT_APP_BLANK_TECH_SIGN_IN_URL: Joi.string().required(),
    REACT_APP_BLANK_TECH_SIGN_UP_URL: Joi.string().required(),
    REACT_APP_BLANK_TECH_SIGN_OUT_URL: Joi.string().required(),
    REACT_APP_BLANK_TECH_AFTER_SIGN_IN_URL: Joi.string().required(),
    REACT_APP_BLANK_TECH_AFTER_SIGN_UP_URL: Joi.string().required(),
}).unknown();
