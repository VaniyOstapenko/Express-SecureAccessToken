const ExceptionType = require('../Exception/exception');
const { createUserDB, getUserByEmail } = require('../repository/user.repository');
const bcrypt = require('bcrypt');
const salt = 10;

async function createUser(name, surname, email, pwd) {
    const user = await getUserByEmail(email);
    if (user.length) throw new Error(ExceptionType.USER_SERVICE_LENGTH);

    const hashPwd = await bcrypt.hash(pwd, salt);

    const data = await createUserDB(name, surname, email, hashPwd);
    if (!data.length) throw new Error(ExceptionType.USER_SERVICE_DATA_LENGTH);

    return data;
}

async function authUser(email, pwd) {
    const user = await getUserByEmail(email);
    if (!user.length) throw new Error(ExceptionType.USER_SERVICE_EMAIL);

    const pwdUserHash = user[0].pwd;

    if (!(await bcrypt.compare(pwd, pwdUserHash))) throw new Error(ExceptionType.USER_SERVICE_PASSWORD_MATCH);

    return user;
}

module.exports = { createUser, authUser };