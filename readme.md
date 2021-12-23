<br />
<p align="center">
  
  <h3 align="center">EGFWD AWD 1ST Poject API Image</h3>

  <p align="center">
    Project Description
    
</p>

this project is a requirement for the nano degree program introduced by udacity and egFWD. it is simply an Image API for simple REST API that is respobssable for caching an image for the required deimnesion then displaying it and if it is already cached just displaying it.


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
<ol>
<li><a href="#about-project">About project</a></li>
<li><a href="#prerequisites">Prerequisites</a></li>
<li><a href="#endPoints">EndPoints</a></li>
<li><a href="#how-to-install">How to install</a></li>
<li><a href="#scripts-run">Scripts Run</a></li>
<li><a href="#code-structure">Code Structure</a></li>
<li><a href="#important-code-snippets">Important Code Snippets</a></li>
<li><a href="#udacity-rubric">Udacity Rubric</a></li>
<li><a href="#udacity-review-Project-modification-acceptance">Udacity Review Project Modification Acceptance</a></li>
<li><a href="#contact">Contact</a></li>
<li><a href="#refrenceces">Refrenceces</a></li>
</ol>
</details>

## About project
actually resiziing the image is not the main issue but the main issue was to make use of express to build a server backend, NodJs as a run time enviroment. Jasmine to test the design behaviours and design developemnt , beside using of npm packages just as sharp for image resizing morgan supertest to test the http request, express validator for validation. although existance for third party packages for validation, middleware but acustom code is used to handle these issues

## Prerequisites

* Knowing Javascript ES5, ES6
* Knowing Express
* Knowing NodeJs
* Knowing Jasmine

## Endpoints

| Endpoint | Req | Param | Res | Usage
| ------------ | ------------ | ------------ | ------------ | ------------ |
| **/** | **GET** | | **200** | **Home** |
| **convert** | **GET** | **imageName, width, height** | **200**| **caching and resizing Images** |

## How to install
clone our repo
```sh
git clone https://github.com/mostafaadawy/egFwd_awd_1st_project_image_cashing_api.git
```
then install node packages in the json file
```sh
npm install
```
or
```sh
yarn install
```
where the required packages as follows:
```
  "devDependencies": {
    "@types/express": "^4.17.13",
    "@types/jasmine": "^3.10.2",
    "@types/morgan": "^1.9.3",
    "@types/node": "^16.11.12",
    "@types/sharp": "^0.29.4",
    "@types/supertest": "^2.0.11",
    "@typescript-eslint/eslint-plugin": "^5.6.0",
    "@typescript-eslint/parser": "^5.6.0",
    "eslint": "^8.4.1",
    "eslint-config-airbnb-base": "^15.0.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-import": "^2.25.3",
    "eslint-plugin-prettier": "^4.0.0",
    "nodemon": "^2.0.15",
    "prettier": "^2.5.1",
    "rimraf": "^3.0.2",
    "ts-node": "^10.4.0",
    "typescript": "^4.5.2"
  },
  "dependencies": {
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "jasmine": "^3.10.0",
    "jasmine-spec-reporter": "^7.0.0",
    "morgan": "^1.10.0",
    "sharp": "^0.29.3",
    "supertest": "^6.1.6"
  }
```
## Scripts Run
```
"scripts": {
    "test": "npx tsc && jasmine",
    "develop": "nodemon --watch './**/*.ts' ./src/index.ts",
    "clean": "rimraf prod/",
    "prod": "npx tsc",
    "reprod": "npm run clean && npx tsc",
    "reprod-run": "npm run reproduce && nodemon prod/index.js",
    "prettier": "prettier --write src/**/*.{ts,tsx,js,jsx}",
    "lint": "eslint . --ext .ts"
  }
```
and we can run dev ts files
```sh
npm run develop
```
for testing
```sh
npm run test
```
to clean old produced folder and run 
```sh
npm run reproduce-run
```
while prettier to put the code in the required formate
```sh
npm run prettier
```
## Code Structure
```
+---assets
|      |
|      +---images   
|      |     encenadaport.jpg
|      |     fjord.jpg
|      |     icelandwaterfall.jpg
|      |     palmtunnel.jpg
|      |     santamonica.jpg
|      \---thumbs
|
+---spec
|   \---support
|           jasmine.json
|
\---src
    |   index.ts
    +---middlewares
    |       auth.ts
    |       index.ts
    |       logger.ts        
    |
    +---routes
    |   |   index.ts
    |   |   homePage.ts
    |   |   
    |   \---api
    |           cashingAPI.ts
    |
    +---tests
    |   +---Specs
    |   |       cashingAPISpec.ts
    |   |       fileFunctions.ts
    |   |       indexSpec.ts
    |   |
    |   \---helpers
    |          reporter.ts
    |
    \---utils
            fileHelperFunction.ts
            imageHelperFunction.ts
            pageCreationHelper.ts
```


## Important Code Snippets
initiating and crating express server
```sh
import * as dotenv from "dotenv"
import express from "express"
import routes from "./routes"

dotenv.config()
const PORT = process.env.PORT || 5000
const app: express.Application = express()
app.use(routes)

app.listen(PORT, () => {
  console.log(`your server has been initiated on port:${PORT}`)
})

export default app

```
simple middleware
```sh
import express from "express"

const logger = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
  console.log(`current visited url is: ${req.url}`)
  next()
}

export default logger

```
collecting many middleware to gether
```sh
import logger from "./logger"
import auth from "./auth"

const middlewares = [auth, logger]
export default middlewares

```
routes can be used as middleware through .use()
```sh
app.use(routes)
```
we can gather many middleware in its index
```sh
import logger from "./logger"
import auth from "./auth"

const middlewares = [auth, logger]
export default middlewares

```
the same we can gather the routes
```sh
import express from "express"
import middlewares from "../middlewares"
import cashingAPI from "./apis/cashingAPI"
import homePage from "./homePage"

const routes = express.Router()

routes.use("/", homePage)
routes.use(middlewares)
routes.use("/convert", cashingAPI)

export default routes

```

## Udacity Rubric

Udacity Rubric for this project can be accessed [here](https://review.udacity.com/#!/rubrics/3005/view).

## Udacity Review Project Modification Acceptance


## Contact
* https://github.com/mostafaadawy
* https://web.facebook.com/mostafa.adawy.96/
* mailto:mostafa_adawy@ymail.com
* www.linkedin.com/in/mostafaamsadawy

## Refrenceces
* [Garbage Collector](https://javascript.info/garbage-collection)
* [free code camp express clean validation](https://www.freecodecamp.org/news/how-to-make-input-validation-simple-and-clean-in-your-express-js-app-ea9b5ff5a8a7/)
* [alternative terminal api http request in terminal](https://httpie.io/)
* [supertest to test request and responce server](https://github.com/visionmedia/supertest#readme)
* [udacity rubric](https://review.udacity.com/#!/rubrics/3005/view)
* [charp node package for image api resizing](https://sharp.pixelplumbing.com/api-constructor)
* [super request request testing](https://www.npmjs.com/package/super-request)
* [sharp package for image resizing](https://www.npmjs.com/package/sharp)
* [udacity free images](https://github.com/udacity/nd-0067-c1-building-a-server-project-starter)
* [M Zanaty web utility package manger to create server with its prettier and all configuration](https://github.com/mohammedelzanaty/m-zanaty-web-utils)
* [Zanaty website](https://www.yonisfy.com/)
