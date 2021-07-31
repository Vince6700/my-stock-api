import {User} from "../types/userTypes";
import UserModel from '../models/User';

export const createNewUser = async (user: User) => {
    const newUser = new UserModel(user);

    if (!newUser) {
        console.log("no user");
        return false
    }

    return  await newUser.save();
}

