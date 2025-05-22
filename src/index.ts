import express, {Request, Response} from "express"

const app = express()

// http://localhost:4000/api
app.use("/api", (_req: Request, res: Response) => {
    res.json({message: "Hello World"})
})

app.listen(4000, () => {
    console.log('Server running on port 4000')
})