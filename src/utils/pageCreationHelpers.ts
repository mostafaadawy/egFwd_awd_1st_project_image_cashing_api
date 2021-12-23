import * as path from "path"
import { readImagesDirectory } from "./fileHelperFunctions"

const assetsImagesFolder = `${path.resolve("./")}/assets/images/`
const assetsThumbsFolder = `${path.resolve("./")}/assets/thumbs/`

const creatHomePage = (): string => {
  const imagesList: string[] = readImagesDirectory(assetsImagesFolder)
  const cashedImagesList: string[] = readImagesDirectory(assetsThumbsFolder)
  const strRawImages: string =
    imagesList.length > 0
      ? imagesList
          .map((file) => `<li>http://localhost:5000/convert?imageName=${file}&width=500&height=500</li>`)
          .toString()
      : "<li>No Images Found</li>"
  const strCashedImages: string =
    cashedImagesList.length > 0
      ? cashedImagesList.map((file) => `<li>${file}</li>`).toString()
      : "<li>No Images Found</li>"
  let str: string = "<h2>Home Page</h2>"
  str += "<h4>you can select one of the follwing images</h4>"
  str += "<ul>"
  str += strRawImages
  str += "</ul>"
  str += "<h4> cashed images</h4>"
  str += "<ul>"
  str += strCashedImages
  str += "</ul>"
  return str
}
export default creatHomePage
