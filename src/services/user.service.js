import User from '../models/user.model';





//create new user
export const newUser = async (body) => {
  const saltRounds = 10;
  const hash = bcrypt.hashSync(body.password, saltRounds);
  body.password = hash;

  const data = await User.create(body);
  return data;
};



