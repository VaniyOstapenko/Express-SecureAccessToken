const pool = require('../db');

async function createUserDB(name, surname, email, hashPwd) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `insert into users(name, surname, email, pwd) 
    values ($1, $2, $3, $4) returning *`;

        const data = (await client.query(sql, [name, surname, email, hashPwd])).rows;
        await client.query('COMMIT');

        return data;
    } catch (error) {
        await client.query('ROLLBACK');
        console.log(`createUser: ${error.message}`);

        return [];
    }
}

async function getUserByEmail(email) {
    const client = await pool.connect();

    const sql = `select * from users where email =$1`;

    const data = (await client.query(sql, [email])).rows;

    return data;
}

module.exports = { createUserDB, getUserByEmail };