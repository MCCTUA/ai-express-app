import express from "express";
import { listUser } from "../controllers/auth-controller";

const router = express.Router()

//localhost:4000/api/auth/user
router.get("/user", listUser)

export default router