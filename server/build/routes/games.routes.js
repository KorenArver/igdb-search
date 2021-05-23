"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const gamesController = require('../controllers/games.controller');
router.get('/:gameId/relevantInfo', gamesController.getGameRelevantInfo);
router.get('/search/:searchInput', gamesController.searchGame);
module.exports = router;
