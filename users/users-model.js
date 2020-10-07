const db = require('../database/db-config.js');

function find() {
    return db('users').select('id', 'username', 'department').orderBy('id');
}


function findBy(filter) {
    return db('users').where(filter).orderBy('id');
}

async function add(user) {
    try {
        const [id] = await db('users').insert(user, 'id');

        return findById(id);
    } catch (error) {
        throw error;
    }
}

function findById(id) {
    return db('users').where({ id }).first();
}

module.exports = {
    find,
    findBy,
    add,
    findById
}