const pool = require('./pool');

async function getAllUsernames() {
    const { rows } = await pool.query("SELECT username FROM users");
    return rows;
}

async function insertUsername(username) {
    await pool.query("INSERT INTO users (username) VALUES ($1)", [username]);
}

module.exports = {
    getAllUsernames,
    insertUsername,
};
