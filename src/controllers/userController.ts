import { Request, Response } from 'express'
import { persistUser, fetchUsers } from '../services/userService'

export const createUser = async (req: Request, res: Response) => {
    const body = req.body

    if (!body) {
        return res.status(401).json({
            success: false,
            error: 'You must provide a user',
        })
    }

    try {
        const result = await persistUser(body)
        return res.status(200).json(result)
    } catch (e) {
        return res.status(500).json(e)
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const result = await fetchUsers()
        return res.status(200).json(result)
    } catch (e) {
        return res.status(500).json(e)
    }
}
