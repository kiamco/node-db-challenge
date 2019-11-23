const knex = require('knex');
const config = require('../../knexfile.js');
const db = knex(config.development);


const find = () => {
    return db('project')
        .select('*');
}

const findById = (id) => {
    return db('project')
        .select('*')
        .where('id', `${id}`);
}


const add = (project) => {
    return db('project')
        .insert(project)
}

const update = (changes, id) => {
    return db('project')
        .where('id', `${id}`)
        .update(changes)
}

const remove = (id) => {
    return db('project')
        .where({
            id: id
        })
        .del()
}

const getTasks = (id) => {
    return db('project')
        .select('project.id', 'project.proj_name', 'task.task_description', 'task.task_complete')
        .innerJoin('task', { 'project.id': 'task.project_id' })
}


module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    getTasks
}