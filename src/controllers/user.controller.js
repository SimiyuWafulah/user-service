import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

// creating new user
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signing up
export const  signup = async () => {
    const existingAccount = User.findOne({email});
    const {name, email, password} = req.body;
    const hashedPassword = await bcryptjs.hash(password, 10)
    
    //checking whether account exists
    if (existingAccount){
        return res.status(409).json('Account already exists')
    }

    try {
        const newUser = new User ({name, email, password: hashedPassword});
        await newUser.save()
        res.status(201).json({message: 'Signup successful', user: newUser})
    } catch (error) {
        console.log(error)
    }
}


//signing in 
export const signin = async () => {
    const {email, password} = req.body;
    try{
        //check if user exists
        const validUser = await User.findOne({email});
        if(!validUser) {
            return res.status(400, 'Account does not exist');
        }
        // checking password validity
        const validPassword = await bycryptjs.compareSync(validUser.password, password);
        if (!validPassword) {
            return res.status(400, 'Incorrect email or password');
        }

        const token = jwt.sign({id: validUser._id}, process.env.JWT);
        const {password: pass, rest} = validUser._doc
        res
        .cookie('access_token', token, {httpOnly: true})
        .status(200)
        .json({message: 'Sign in Successful', rest})
        } catch (error) {
            console.log(error)
        }
}


