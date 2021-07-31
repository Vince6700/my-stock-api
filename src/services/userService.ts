import {User} from "../types/userTypes";
import UserModel from '../models/User';

export const persistUser = async (user: User) => {
    const newUser = new UserModel(user);

    if (!newUser) {
        console.log("no user");
        return false
    }

    return  await newUser.save();
}

export const fetchUsers = async () => {
    return UserModel.find({});
}

