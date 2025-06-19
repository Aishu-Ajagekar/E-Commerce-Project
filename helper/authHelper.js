import bcrypt from "bcrypt";

//create password and convert into hased pass
export const hashPassword = async (password) => {

  //formula of saltRound number_of_iterations = 2 * 10 ----> 1024 iteration

  try {
    const saltRound = 10; //minimum 10 round
    const hashedPassword = await bcrypt.hash(password, saltRound);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

//compare password and hashed password in database 
export const comparePassword = async(password , hashedPassword) =>{
    try {
        return bcrypt.compare(password , hashedPassword);
    } catch (error) {
        console.log(error);
    }
}