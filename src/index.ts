import dotenv from "dotenv";
dotenv.config();
import path from "node:path";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import { errorHandler } from "./middlewares/error-handler";
import authRouter from "./routes/auth-route"

const app = express();

app.use(cors()); // allow all origin
app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(
  compression({
    level: 6,
  })
);

// เขียนแบบ global error handler แบบ Express V5.
// http://localhost:4000/api/
// app.use("/api", (_req: Request, res: Response, next: NextFunction) => {
//   res.status(200).json({ message: "Express.js V5 API" });
// });

// http://localhost:4000/api/auth
app.use("/api/auth", authRouter)

//http://localhost:4000/file_name
app.use(express.static(path.join(__dirname, "public")));

// Global error hanler (ต้องอยู่บรรทัดสุดท้ายของ routes)
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(
    `Server running on port ${process.env.PORT} || ENV: ${process.env.NODE_ENV}`
  );
});
