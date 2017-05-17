// Mocha and Basic Testing 16:41

module.exports.add = (a, b) => a + b;

module.exports.square = (x) => x * x;

module.exports.asynchAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 500);
};

module.exports.asynchSquare = (x, callback) => {
    setTimeout(() => {
        callback(x * x);
    }, 500);
};

module.exports.setName = (user, fullname) => {
    var names = fullname.split(' ');
    user.firstname = names[0];
    user.lastname = names[1];
    return user;
};