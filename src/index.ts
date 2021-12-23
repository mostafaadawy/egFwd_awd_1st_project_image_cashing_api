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
