import User from '../models/user.model';





//create new user
export const newUser = async (body) => {
  const saltRounds = 10;
  const hash = bcrypt.hashSync(body.password, saltRounds);
  body.password = hash;

  const data = await User.create(body);
  return data;
};

//this method for login user

export const loginUser = async (body) => {
  const data = await User.findOne({ email: body.email });

  if (data) {
    if (bcrypt.compareSync(body.password, data.password)) {
      return data;
    } else {
      throw new Error('you have enter invalid Password');
    }
  } else {
    throw new Error('you have enter invalid emailId.');
  }
};

export const forgetPassword = async (body) => {
  const data = await User.findOne({ email: body.email });
  if (data) {
    var token = jwt.sign(
      { email: data.email, _id: data._id },
      process.env.SECRET_KEY
    );
    // console.log("getting token or not ------------------>",token);
    return token;
  } else {
    throw new Error(
      `please registered your email 
      ${body.email}, is not registered in the database. Please register your email.`
    );
  }
};



