import dotenv from "dotenv";
dotenv.config();
import path from "node:path";
import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";

const app = express();
app.use(cors()); // allow all origin
app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(
  compression({
    level: 6,
  })
);

// http://localhost:4000/api
app.use("/api", (_req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

//http://localhost:4000/file_name
app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT, () => {
  console.log(
    `Server running on port ${process.env.PORT} || ENV: ${process.env.NODE_ENV}`
  );
});
