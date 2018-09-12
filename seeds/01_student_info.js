
const g95Data = require('../g95Data')

exports.seed = function (knex, Promise) {
    return knex('g95').del()
        .then(function () {
        return knex('g95').insert(g95Data)
        });
}
