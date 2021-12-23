import sharp from "sharp"
import express from "express"
import * as path from "path"
import { checkImageExist } from "./fileHelperFunctions"

const imageCashing = async (inFilePath: string, outFilePath: string, w: number, h: number): Promise<void> => {
  await sharp(inFilePath).resize(w, h).toFile(outFilePath)
}

const extractValidateParams = (req: express.Request) => {
  try {
    const { imageName, width, height } = req.query
    if (!imageName) return { valid: false, err: "missing image name" }
    if (!width) return { valid: false, err: "missing width" }
    if (!height) return { valid: false, err: "missing height" }
    if (Number.isNaN(Number(width))) return { valid: false, err: "width must be number" }
    if (Number.isNaN(Number(height))) return { valid: false, err: "height must be number" }
    const imPath = `${path.resolve("./")}/assets/images/${imageName}`
    if (!checkImageExist(imPath)) return { valid: false, err: "image is not exist or missing its extension" }
    return { valid: true, imageName, width, height }
  } catch (e) {
    return { valid: false, err: e }
  }
}

const checkProcessed = (dirPath: string, imageName: string, width: number, height: number): boolean => {
  let filteredImageName: string = imageName
  if ((<string>imageName).includes("."))
    filteredImageName = (<string>imageName).split(".").slice(0, -1).join(".") as string
  const imgFullPath = `${dirPath}/${filteredImageName}_width${width}_height${height}.jpg`
  return checkImageExist(imgFullPath)
}

export { imageCashing, extractValidateParams, checkProcessed }
