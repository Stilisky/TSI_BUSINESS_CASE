const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')
const expect = chai.expect;

chai.use(chaiHttp)

describe("Match endpoints Test", () => {
   it('Test player Match registration', (done) => {
      const game = {
         "opposingTeam": "Polka",
         "pointsScored": 95,
         "numberAssists": 85,
         "numberIntercepts":25,
         "numberShotsBlocked": 14,
         "shotSuccess": 94
      };
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjNjOWM5ZWE2NDBkNzIyYzM4YWY1NSIsInVzZXJuYW1lIjoiTW9sb2tpdG8iLCJlbWFpbCI6Ik1vbG9raXRvIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzAxMDU3MTc3LCJleHAiOjE3MDEwNzUxNzd9.0U4pr-4Q3GoSx-P0qYiXoJ6E5JSU8vnZ7AH25plXTvU"

      chai.request(app)
         .post("/api/v1/games/player/6563d76e10ec675493c2288d")
         .set('Authorization', `Bearer ${token}`)
         .send(game)
         .end((err, res) => {
            expect(res).to.have.status(401);
            done(err)
         })
   })

   it('Test get all matchs', (done) => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjNjOWM5ZWE2NDBkNzIyYzM4YWY1NSIsInVzZXJuYW1lIjoiTW9sb2tpdG8iLCJlbWFpbCI6Ik1vbG9raXRvIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzAxMDU3MTc3LCJleHAiOjE3MDEwNzUxNzd9.0U4pr-4Q3GoSx-P0qYiXoJ6E5JSU8vnZ7AH25plXTvU"

      chai.request(app)
         .get("/api/v1/games")
         .set('Authorization', `Bearer ${token}`)
         .end((err, res) => {
            expect(res).to.have.status(401);
            done(err)
         })
   })

   it('Test get match', (done) => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjNjOWM5ZWE2NDBkNzIyYzM4YWY1NSIsInVzZXJuYW1lIjoiTW9sb2tpdG8iLCJlbWFpbCI6Ik1vbG9raXRvIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzAxMDU3MTc3LCJleHAiOjE3MDEwNzUxNzd9.0U4pr-4Q3GoSx-P0qYiXoJ6E5JSU8vnZ7AH25plXTvU"
      
      chai.request(app)
         .get("/api/v1/players/6563dafe7e16107559551a08c1")
         .set('Authorization', `Bearer ${token}`)
         .end((err, res) => {
            expect(res).to.have.status(400);
            done(err)
         })
   })
})