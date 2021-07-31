import mongoose, { Schema, model } from 'mongoose'
import { User } from '../types/userTypes'

const userSchema = new Schema<User>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        firstname: { type: String, required: true },
    },
    { timestamps: true }
)

export default model<User>('userModel', userSchema)
