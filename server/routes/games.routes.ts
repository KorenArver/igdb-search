import express from 'express'

const router = express.Router()
const gamesController = require('../controllers/games.controller')

router.get('/:gameId/relevantInfo', gamesController.getGameRelevantInfo)
router.get('/search/:searchInput', gamesController.searchGame)

module.exports = router
