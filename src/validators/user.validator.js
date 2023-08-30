import Joi from '@hapi/joi';
import HttpStatus from 'http-status-codes';
export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string()
      .min(4)
      .required()
      .pattern(/^[A-Z]+[a-zA-Z]{2,}[0-9]*$/),

    lastName: Joi.string()
      .min(4)
      .required()
      .pattern(/^[A-Z]+[a-zA-Z]{2,}[0-9]*$/),

    email: Joi.string()
      .required()
      .pattern(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/),

    password: Joi.string()
      .min(8)
      .required()
      .pattern(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z0-9!@#$%^&*()_+{}|:;<>,.?/-]).{8,}$/
      )
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    res.status(HttpStatus.NOT_ACCEPTABLE).json({
      code: HttpStatus.NOT_ACCEPTABLE,
      message: `${error}`
    });
  } else {
    next();
  }
};

export const validateLogin = (user, password) => {
  if (!user || user.password !== password) {
    throw {
      code: HttpStatus.UNAUTHORIZED,
      message: 'Invalid email or password'
    };
  }
};
