const knex = require('knex');
const config = require('../../knexfile.js');
const db = knex(config.development);


const find = () => {
    return db('resource')
        .select('*');
}

const findById = (id) => {
    return db('resource')
        .select('*')
        .where('id', `${id}`);
}


const add = (resource) => {
    return db('resource')
        .insert(scheme)
}

const update = (changes, id) => {
    return db('resource')
        .where('id', `${id}`)
        .update(changes)
}

const remove = (id) => {
    return db('resource')
        .where({
            id: id
        })
        .del()
}



module.exports = {
    find,
    findById,
    add,
    update,
    remove
}