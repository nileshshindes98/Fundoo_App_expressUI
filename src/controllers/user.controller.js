import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';


//this is for login user

export const loginUser = async (req, res, next) => {
  try {
    const data = await UserService.loginUser(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'User login successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      data: data,
      message: `${error}`
    });

    next(error);
  }
};



