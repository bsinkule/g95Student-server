const knex = require('./connection')

const getAll = () => knex('g95')
const getOne = (id) =>  knex('g95').where('id', id)
const postOne = (body) => knex('g95').insert(body).returning('*')
const updateOne = (id, body) => knex('g95').where('id', id).update(body).returning('*')
const deleteOne = (id) => knex('g95').where('id', id).del().returning('*')

module.exports = {
    getAll,
    getOne,
    postOne,
    updateOne,
    deleteOne
}