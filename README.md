# igdb-search

IGDB Search is a small app that allows the user to search for a video game and get information about it on a single page.

## Motivation

This app was built to learn how to make a react app including the front-end (`client/` folder) and the back-end (`server/` folder) as well as using an API to fetch data.

## Libraries and Technologies

<b>Built with</b>

- [Typescript](https://www.typescriptlang.org/)
- [React](https://fr.reactjs.org/)
- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/fr/)
- [SwiperJS](https://swiperjs.com/)

I also wanted to test [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to make my own opinion about these tools.

## Usage

A live demo will be available here soon...

If you want to clone the project and run it on your own (localhost), you have to know that the application requires some secret account values related to the [IGDB API](https://www.igdb.com/api) which is required to make the app work. Of course, I didn't leave mine on the repository so if you want to use it with your own values, here's how to do :

- Follow the instructions [here](https://api-docs.igdb.com/#about) to create an account and authenticate.
- Create a file named `.env` in the `server/` folder and fill it with the following (and the relevant replacements):

```
IGDB_CLIENT_ID = [YOUR_CLIENT_ID]
IGDB_ACCESS_TOKEN = [YOUR_ACCESS_TOKEN]
```

- At first time, you'll need to install the required dependencies from the `client/`, the `server/` and the root folder with:

```
npm install
```

- Now, you should be able to launch the app from the root folder with:

```
npm run dev
```
