import supertest from "supertest"
import app from "../../index"

const testRequest = supertest(app)

describe("testing image parameter", () => {
  it("testing missing image name", async (done) => {
    testRequest.get("/convert?width=100&height=500").expect(400, done)
  })
  it("testing missing width", async (done) => {
    testRequest.get("/convert?imageName=fjord&height=500").expect(400, done)
  })
  it(" testing missing height", async (done) => {
    testRequest.get("/convert?imageName=fjord&width=500").expect(400, done)
    done()
  })
  it("testing error in image name", async (done) => {
    testRequest.get("/convert?imageName=fjcord.jpg&width=100&height=500").expect(400, done)
    done()
  })
  it("testing error in width not number", async (done) => {
    testRequest.get("/convert?imageName=fjord.jpg&width=1d00&height=500").expect(400, done)
    done()
  })
  it("testing error in height not number", async (done) => {
    testRequest.get("/convert?imageName=fjord.jpg&width=100&height=5d00").expect(400, done)
    done()
  })
  it("testing all are right parameters", async (done) => {
    testRequest.get("/convert?imageName=fjord.jpg&width=500&height=400").expect(200, done)
    done()
  })
})
