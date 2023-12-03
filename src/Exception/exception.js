const ExceptionType = {
    USER_NAME: 'name is not found',
    USER_SURNAME: 'surname is not found',
    USER_EMAIL: 'email is not found',
    USER_PWD: 'password is not found',
    USER_NAME_IS_NAN: 'a name cannot be a number',
    USER_SURNAME_IS_NAN: 'a surname cannot be a number',
    USER_PWD_LENGTH: 'the pwd must be more than 8 characters long',
    USER_EMAIL_RGX: 'incorrect mail input',

    USER_SERVICE_LENGTH: 'there is such a user',
    USER_SERVICE_DATA_LENGTH: 'not created',
    USER_SERVICE_EMAIL: 'user is not found',
    USER_SERVICE_PASSWORD_MATCH: 'pwd does not match'
}

module.exports = ExceptionType;