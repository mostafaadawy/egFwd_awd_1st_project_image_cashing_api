import * as path from "path"
import { imageCashing, extractValidateParamscore, checkProcessed } from "../../utils/imageHelperFunctions"

const file = `${path.resolve("./")}/assets/`

describe("Image Helper Functions Testing", () => {
  describe("resizing image true path", () => {
    it("when right path we have some images list with length more than 0", () => {
      expect(
        imageCashing(`${file}/images/fjord.jpg`, `${file}/thumbs/test_width100_height100.jpg`, 100, 100)
      ).toBeDefined()
    })
  })
  describe("testing parameters exteractions all okay", () => {
    it("testing the fileExists function with non-existing file", () => {
      expect(extractValidateParamscore("fjord.jpg", 100, 100)).toEqual({
        valid: true,
        imageName: "fjord.jpg",
        width: 100,
        height: 100
      })
    })
    it("testing the fileExists function with non-existing file", () => {
      expect(extractValidateParamscore("fjord.jpg", 0, 100)).toEqual({
        valid: false,
        err: "missing width"
      })
    })
  })
  describe("check if exist for cashed image", () => {
    it("testing the fileExists function with non-existing file", () => {
      expect(checkProcessed(`${file}/thumbs/`, "test", 100, 100)).toBeTruthy()
    })
    it("check if exist for new image", () => {
      expect(checkProcessed(`${file}/thumbs/`, "testtyrtycdsd", 100, 100)).toBeFalsy()
    })
  })
})
