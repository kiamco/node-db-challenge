const knex = require('knex');
const config = require('../../knexfile.js');
const db = knex(config.development);


const find = () => {
    return db('task')
        .select('*');
}

const findById = (id) => {
    return db('task')
        .select('*')
        .where('id', `${id}`);
}


const add = (task) => {
    return db('task')
        .insert(task)
}

const update = (changes, id) => {
    return db('task')
        .where('id', `${id}`)
        .update(changes)
}

const remove = (id) => {
    return db('task')
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