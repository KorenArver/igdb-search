"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('dotenv').config();
const app = express_1.default();
const PORT = process.env.PORT || 5000;
// Default message at launch
app.get('/', (req, res) => {
    res.send('Hello to igdb-search API');
});
const gamesRouter = require('./routes/games.routes');
app.use('/games', gamesRouter);
app.listen(PORT, () => console.log(`Server is running at https://localhost:${PORT}`));
