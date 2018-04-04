process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server/index.js');
let should = chai.should();

const username = "zlatik1696";
chai.use(chaiHttp);

describe('/GET tweets', () => {
    it('it should GET all tweets with username zlatk1696', (done) => {
      chai.request(server)
          .get(`/user/${username}/tweets`)
          .end((err, res) => {
              res.should.have.status(200);
              res.should.be.json;
              res.body.should.be.a('array');
              res.body[0].should.have.property("created_at");
              res.body[0].should.have.property("id");
              res.body[0].should.have.property("id_str");
              res.body[0].should.have.property("text");
              res.body[0].should.have.property("truncated");
              res.body[0].should.have.deep.property("user.screen_name","zlatik1696");
            done();
          });
    });
});
describe('/GET index.html', () => {
    it('it should GET index.html', (done) => {
      chai.request(server)
          .get("/")
          .end((err, res) => {
              res.should.have.status(200);
              res.should.be.html;
            done();
          });
    });
});

describe('/GET bundle.js', () => {
    it('it should GET bundle.js file', (done) => {
      chai.request(server)
          .get("/bundle.js")
          .end((err, res) => {
              res.should.have.status(200);
            done();
          });
    });
});