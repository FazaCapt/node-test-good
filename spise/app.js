var db = require('./db.js');
//tidak boleh const!

module.exports.handleSignup = (email, password) => {
    //  Check if email already exist
    //  Save the user to the database
    // db.saveUser({
    //         email: 'Email',
    //         password: 'Password'
    //     })
    db.saveUser({ email, password });
    //  Send the wellcome email


}