const ExceptionType = require('../Exception/exception')

function isValidUserBody(req, res, next) {
    const { name, surname, email, pwd } = req.body;

    if (!name) throw new Error(ExceptionType.USER_NAME);
    if (!surname) throw new Error(ExceptionType.USER_SURNAME);
    if (!email) throw new Error(ExceptionType.USER_EMAIL);
    if (!pwd) throw new Error(ExceptionType.USER_PWD);
    if (!isNaN(name)) throw new Error(ExceptionType.USER_NAME_IS_NAN);
    if (!isNaN(surname)) throw new Error(ExceptionType.USER_SURNAME_IS_NAN);
    if (pwd.length < 8) throw new Error(ExceptionType.USER_PWD_LENGTH);
    if (!/^[\w\W]+@+[a-z]+\.+[a-z]{2,4}$/gm.test(email)) throw new Error(ExceptionType.USER_EMAIL_RGX);


    next();
}

module.exports = { isValidUserBody };