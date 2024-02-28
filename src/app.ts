import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', (req: Request, res: any) => {
  res.send('working successfully in university management')
})

export default app
