const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')
const expect = chai.expect;

chai.use(chaiHttp)

describe("Player endpoints Test", () => {
   it('Test player registration', (done) => {
      const player = {
         "playerName": "Magic Johnson",
         "jerseyNumber": 10,
         "position": "SHOOTING GUARD"
      };
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjNjOWM5ZWE2NDBkNzIyYzM4YWY1NSIsInVzZXJuYW1lIjoiTW9sb2tpdG8iLCJlbWFpbCI6Ik1vbG9raXRvIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzAxMDU3MTc3LCJleHAiOjE3MDEwNzUxNzd9.0U4pr-4Q3GoSx-P0qYiXoJ6E5JSU8vnZ7AH25plXTvU"

      chai.request(app)
         .post("/api/v1/players")
         .set('Authorization', `Bearer ${token}`)
         .send(player)
         .end((err, res) => {
            expect(res).to.have.status(401);
            done(err)
         })
   })

   it('Test get all players', (done) => {

      chai.request(app)
         .get("/api/v1/players")
         .end((err, res) => {
            expect(res).to.have.status(200);
            done(err)
         })
   })

   it('Test get player', (done) => {
      chai.request(app)
         .get("/api/v1/players/6563dafe7e1jkjk61079551a08c1")
         .end((err, res) => {
            expect(res).to.have.status(400);
            done(err)
         })
   })

   it('Test player informations update', (done) => {
      const player = {
         "jerseyNumber": 15
      };
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjNjOWM5ZWE2NDBkNzIyYzM4YWY1NSIsInVzZXJuYW1lIjoiTW9sb2tpdG8iLCJlbWFpbCI6Ik1vbG9raXRvIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzAxMDU3MTc3LCJleHAiOjE3MDEwNzUxNzd9.0U4pr-4Q3GoSx-P0qYiXoJ6E5JSU8vnZ7AH25plXTvU"


      chai.request(app)
         .put("/api/v1/players/6563dafe7e161079551a08c1")
         .set('Authorization', `Bearer ${token}`)
         .send(player)
         .end((err, res) => {
            expect(res).to.have.status(401);
            done(err)
         })
   })

   it('Test delete player', (done) => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjNjOWM5ZWE2NDBkNzIyYzM4YWY1NSIsInVzZXJuYW1lIjoiTW9sb2tpdG8iLCJlbWFpbCI6Ik1vbG9raXRvIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzAxMDU3MTc3LCJleHAiOjE3MDEwNzUxNzd9.0U4pr-4Q3GoSx-P0qYiXoJ6E5JSU8vnZ7AH25plXTvU"
      
      chai.request(app)
         .delete("/api/v1/players/6563dafe7e16")
         .set('Authorization', `Bearer ${token}`)
         .end((err, res) => {
            expect(res).to.have.status(401);
            done(err)
         })
   })

   it('Unit Data Process', (done) => {
      
      chai.request(app)
         .get("/api/v1/players/6563d76e10e545c675493c2288d/statistiques")
         .end((err, res) => {
            expect(res).to.have.status(400);
            done(err)
         })
   })
})