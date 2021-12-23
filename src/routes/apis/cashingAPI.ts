import express from "express"
import * as path from "path"

import { imageCashing, extractValidateParams, checkProcessed } from "../../utils/imageHelperFunctions"

const cashingAPI = express.Router()

cashingAPI.get("/", async (req: express.Request, res: express.Response) => {
  const dirThumbPath: string = `${path.resolve("./")}/assets/thumbs/`
  const dirImagesPath: string = `${path.resolve("./")}/assets/images/`
  const parmeters = extractValidateParams(req)
  if (parmeters.valid) {
    let filteredImageName: string = <string>parmeters.imageName
    if ((<string>parmeters.imageName).includes(".")) {
      filteredImageName = (<string>parmeters.imageName).split(".").slice(0, -1).join(".") as string
    }
    const imgFullName = `${filteredImageName}_width${parmeters.width}_height${parmeters.height}.jpg`
    const outFilePath = `${dirThumbPath}/${imgFullName}`
    const inFilePath = `${dirImagesPath}/${parmeters.imageName}`
    if (
      checkProcessed(dirThumbPath, parmeters.imageName as string, Number(parmeters.width), Number(parmeters.height))
    ) {
      res.status(200).sendFile(outFilePath)
    } else {
      await imageCashing(inFilePath, outFilePath, Number(parmeters.width), Number(parmeters.height))
      res.status(200).sendFile(outFilePath)
    }
  } else {
    console.log(parmeters.err)
    res.status(400).send(parmeters.err)
  }
})

export default cashingAPI
