import express from "express"

const auth = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
  console.log(`reserved for authentication middleware where it has to be the first middleware`)
  next()
}

export default auth
