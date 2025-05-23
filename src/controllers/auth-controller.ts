import { Request, Response } from "express";

export const listUser = (_req: Request, res: Response) => {
    res.status(200).json({
        message: "list user"
    })
}