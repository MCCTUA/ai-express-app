import express, { Request, Response } from "express";

const router = express.Router()

//localhost:4000/api/
router.get("/", (_res: Request, res : Response) => {
    res.status(200).json({
        message: "Express.js V5 API..."
    })
})

export default router