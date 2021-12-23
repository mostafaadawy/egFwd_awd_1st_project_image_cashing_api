import * as path from "path"
import { readImagesDirectory, checkImageExist } from "../../utils/fileHelperFunctions"

const file = `${path.resolve("./")}/assets/images/`

describe("File maangement testing", () => {
  describe("Read Images Names from Image Directory", () => {
    it("when right path we have some images list with length more than 0", () => {
      expect(readImagesDirectory(file).length > 0).toBeTruthy()
    })
    it("when wrong path we dont have images", () => {
      expect(readImagesDirectory(`${file}/f-f`).length > 0).toBeFalsy()
    })
  })
  describe("Testing the fileExists function", () => {
    it("testing the fileExists function with non-existing file", () => {
      expect(checkImageExist(`${file}fjord.jpg`)).toBeTruthy()
    })
    it("testing the fileExists function with existing file", () => {
      expect(checkImageExist(`${file}ddd.d`)).toBeFalsy()
    })
  })
})
