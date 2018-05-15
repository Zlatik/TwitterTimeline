process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server/index.js');
let should = chai.should();

const username = "zlatik1696";
chai.use(chaiHttp);

const mock ={
    "created_at":"Mon Dec 25 08:52:53 +0000 2017",
    "id":945215760653275100,
    "id_str": "945215760653275136",
    "text": "I'm learning how to #code with @javvy_app: whenever, wherever! ☕️ https://t.co/do6jvyrWPQ #java #androiddev",
    "truncated": false,
    "user": {
        "id": 4629892395,
        "id_str": "4629892395",
        "name": "Sviatoslav",
        "screen_name": "zlatik1696",
        "location": "",
        "description": "",
        "url": null,
        "entities": {
            "description": {
                "urls": []
            }
        }
    }
}
describe('/GET tweets', () => {
    it('it should GET all tweets with username zlatk1696', (done) => {
      chai.request(server)
          .get(`/user/${username}/tweets`)
          .end((err, res) => {
              res.should.have.status(200);
              res.should.be.json;
              res.body.should.be.a('array');
              res.body[0].should.have.property("created_at",mock["created_at"]);
              res.body[0].should.have.property("id",mock["id"]);
              res.body[0].should.have.property("id_str",mock["id_str"]);
              res.body[0].should.have.property("text",mock["text"]);
              res.body[0].should.have.property("truncated",mock["truncated"]);
              res.body[0].should.have.deep.property("user.screen_name",username);
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