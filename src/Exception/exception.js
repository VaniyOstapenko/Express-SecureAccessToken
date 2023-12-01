const ExceptionType = {
    USER_NAME: 'name is not found',
    USER_SURNAME: 'surname is not found',
    USER_EMAIL: 'email is not found',
    USER_PWD: 'password is not found',
    USER_NAME_IS_NAN: 'a name cannot be a number',
    USER_SURNAME_IS_NAN: 'a surname cannot be a number',
    USER_PWD_LENGTH: 'the password must be more than 8 characters long',
    USER_EMAIL_RGX: 'incorrect mail input',
}

module.exports = ExceptionType;