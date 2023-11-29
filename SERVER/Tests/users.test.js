const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')
const expect = chai.expect;

chai.use(chaiHttp)

describe("User endpoints Test", () => {
   // it('Test user registration', (done) => {
   //    const user = {
   //       "username": "Kaolo",
   //       "email": "Kaolo@mail.com",
   //       "password": "123456"
   //    };

   //    chai.request(app)
   //       .post("/api/v1/auth/register")
   //       .send(user)
   //       .end((err, res) => {
   //          expect(res).to.have.status(201);
   //       })
   // })

   it('Test get all users', (done) => {

      chai.request(app)
         .get("/api/v1/auth/users")
         .end((err, res) => {
            expect(res).to.have.status(401);
            done(err)
         })
   })

   // it('Test user login', (done) => {
   //    const login = {
   //       "email": "notexist@mail.com",
   //       "password": "123456"
   //    };

   //    chai.request(app)
   //       .post("/api/v1/auth/login")
   //       .send(login)
   //       .end((err, res) => {
   //          expect(res).to.have.status(401);
   //          done(err)
   //       })
   // })
})