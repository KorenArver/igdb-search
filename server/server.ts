import express from 'express'
import { Request, Response } from 'express'

const app = express()
const PORT = process.env.PORT || 5000

// Default message at launch
app.get('/', (req: Request, res: Response) => {
  res.send('Hello to igdb-search API')
})

const gamesRouter = require('./routes/games.routes')
app.use('/games', gamesRouter)

app.listen(PORT, () =>
  console.log(`Server is running at https://localhost:${PORT}`)
)
