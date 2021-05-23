import express from 'express'
import { Request, Response } from 'express'
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

const cors = require('cors')
app.use(
  cors({
    origin: 'https://igdb-search.netlify.app',
  })
)

// Default message at launch
app.get('/', (req: Request, res: Response) => {
  res.send('Hello to igdb-search API')
})

const gamesRouter = require('./routes/games.routes')
app.use('/games', gamesRouter)

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
