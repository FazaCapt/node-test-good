const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('Should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Faza', 27);
        expect(spy).toHaveBeenCalledWith('Faza', 27);
    })

    it('Should call saveUser with user object', () => {
        var email = 'fazafahamsyah@gmail.com';
        var password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({ email, password });
        // Menguji fungsi mata-mata yang diberikan telah dipanggil dengan argumen yang diharapkan.

    })
})