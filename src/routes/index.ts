import express from "express"
import middlewares from "../middlewares"
import cashingAPI from "./apis/cashingAPI"
import homePage from "./homePage"

const routes = express.Router()

routes.use("/", homePage)
routes.use(middlewares)
routes.use("/convert", cashingAPI)

export default routes
