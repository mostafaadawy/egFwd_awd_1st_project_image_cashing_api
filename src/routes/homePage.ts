import express from "express"
import creatHomePage from "../utils/pageCreationHelpers"
import logger from "../middlewares/logger"

const homepage = express.Router()

homepage.get("/", logger, (req: express.Request, res: express.Response) => {
  res.send(creatHomePage())
})

export default homepage
