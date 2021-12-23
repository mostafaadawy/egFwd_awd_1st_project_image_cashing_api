import logger from "./logger"
import auth from "./auth"

const middlewares = [auth, logger]
export default middlewares
