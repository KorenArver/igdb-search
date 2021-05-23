"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
require('dotenv').config();
module.exports.searchGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    axios_1.default({
        url: 'https://api.igdb.com/v4/games',
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Client-ID': process.env.IGDB_CLIENT_ID,
            Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`,
        },
        data: `fields name; search "${req.params.searchInput}";`,
    })
        .then((response) => {
        res.status(200).send(response.data);
    })
        .catch((err) => {
        console.error(err);
    });
});
module.exports.getGameRelevantInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    axios_1.default({
        url: 'https://api.igdb.com/v4/games',
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Client-ID': process.env.IGDB_CLIENT_ID,
            Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`,
        },
        data: `fields artworks.*, first_release_date, involved_companies.*, involved_companies.company.*, name, platforms.*, release_dates.*, release_dates.platform.*, screenshots.*, storyline, summary, websites.*; where id = ${req.params.gameId};`, // See https://api-docs.igdb.com/#game for the complete list of possible fields
    })
        .then((response) => {
        res.status(200).send(response.data);
    })
        .catch((err) => {
        console.error(err);
    });
});
