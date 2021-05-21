import express from 'express'

const app = express()
const PORT = process.env.PORT || 5000

const gamesRouter = require('./routes/games.routes')
app.use('/games', gamesRouter)

app.listen(PORT, () =>
  console.log(`Server is running at https://localhost:${PORT}`)
)
