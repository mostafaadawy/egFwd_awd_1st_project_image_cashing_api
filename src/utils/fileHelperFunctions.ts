import * as fs from "fs"

const readImagesDirectory = (assetsImagesFolder: string): string[] => {
  const list = fs.readdirSync(assetsImagesFolder)
  return list
}

const checkImageExist = (assetsImage: string): boolean => fs.existsSync(assetsImage)

export { readImagesDirectory, checkImageExist }
