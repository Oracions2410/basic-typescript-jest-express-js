import express, { NextFunction, Request, Response } from 'express'

export const app = express()

app.get('/', (req: Request, res: Response) => {
    res.json({ message: "Hello, world" })
})