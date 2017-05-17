const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;


//server
//get /
//Some test case
//GET /users
//Some text case

describe('Server', () => {
    describe('GET /', () => {
        it('Should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found'
                    })
                })
                // .expect({
                //     error: 'Page not found'
                // })
                .end(done);
        })
    })

    describe('GET /Users', () => {
        //make a new test 
        //assert 200
        //assert that you exist in users array
        it('Should return my user object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Faza',
                        age: 27
                    })
                })
                .end(done)
        })
    })
})