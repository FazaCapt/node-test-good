// Testing Asynchronous Code 11:25

const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('Should add two number', () => {
            var res = utils.add(5, 7);
            expect(res).toBe(12, 'Apa hayo').toBeA('number');
        })

        it('should asynch Add two number', (done) => {
            utils.asynchAdd(4, 4, (sum) => {
                expect(sum).toBe(8).toBeA('number');
                done();
            });
        });
    });


    it('should asynch Square a number', (done) => {
        utils.asynchSquare(4, (res) => {
            expect(res).toBe(16).toBeA('number');
            done();
        });
    });

    it('Should square a number', () => {
        var res = utils.square(5);
        expect(res).toBe(25, 'salah bae dah').toBeA('number');
    })
})



it('Should expect some values', () => {
    expect([2, 3, 4]).toExclude(8);
})

it('Should set firstname and lastname', () => {
    var user = { location: 'Tangerang', age: '27' };
    var res = utils.setName(user, 'Faza Fahamsyah');
    expect(res).toInclude({
        firstname: 'Faza',
        lastname: 'Fahamsyah'
    });
});