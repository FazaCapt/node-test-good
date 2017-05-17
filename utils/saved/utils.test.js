// Mocha and Basic Testing 16:41
const expect = require('expect');
const utils = require('./utils');
//Lagi-lagi lupa ngasih titik

it('Should add two number', () => {
    var res = utils.add(5, 7);
    // throw new Error('Ini gak bener');
    // Tegaskan bahwa objek sama dengan nilai dengan menggunakan ===.
    // ToBeA untuk mengetahu typeof
    expect(res).toBe(12, 'Apa hayo').toBeA('number');

    // if (res !== 12) {
    //     throw new Error(`expected 12. but, got ${res}.`);
    // }
})

it('Should square a number', () => {
    var res = utils.square(5);

    expect(res).toBe(25, 'salah bae dah').toBeA('number');
    // if (res !== 25) {
    //     throw new Error(`expected 35. but, got ${res}.`);
    // }
})

it('Should expect some values', () => {
    // expect({ name: 'Faza' }).toBe({ name: 'Faza' }); //Tobe tidak untuk object
    // expect({ name: 'Faza' }).toEqual({ name: 'Faza' }); //Mengatakan bahwa objek yang diberikan sama dengan nilai yang digunakan adalah sama.
    // expect({ name: 'faza' }).toNotEqual({ name: 'Faza' }); //Menyatakan bahwa objek yang diberikan tidak sama dengan nilai yang digunakan adalah sama.
    // expect(12).toNotBe(11); //Tegaskan bahwa objek tidak sepenuhnya sama dengan nilai menggunakan ===.
    // expect([2, 3, 4]).toInclude(4);
    //Beri tahu bahwa nilai tertentu disertakan (atau "terkandung") di tempat lain. Nilai sebenarnya mungkin berupa array, objek, atau string. Fungsi komparator, jika diberikan, harus membandingkan dua objek dan mengembalikan false jika tidak sama. Defaultnya adalah menggunakan isEqual.
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