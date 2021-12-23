import supertest from "supertest"
import app from "../../index"

const testRequest = supertest(app)

describe("is server initiated right so that we get the homepage", () => {
  it("is home page responce with 200", async (done) => {
    const testRes = await testRequest.get("/")
    expect(testRes.status).toEqual(200)
    done()
  })
})
