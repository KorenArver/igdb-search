import axios from 'axios'
import { Request, Response } from 'express'

require('dotenv').config()

module.exports.searchGame = async (req: Request, res: Response) => {
  axios({
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
      res.status(200).send(response.data)
    })
    .catch((err) => {
      console.error(err)
    })
}

module.exports.getGameRelevantInfo = async (req: Request, res: Response) => {
  axios({
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
      res.status(200).send(response.data)
    })
    .catch((err) => {
      console.error(err)
    })
}
