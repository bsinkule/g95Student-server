
exports.up = function (knex, Promise) {
    return knex.schema.createTable('g95', (table) => {
        table.increments()
        table.text('firstName').notNullable()
        table.text('lastName').notNullable()
        table.text('hometown').notNullable()
        table.text('prevOccupation').notNullable()
        table.float('favoriteNum')
        table.text('pastime').notNullable()
        })
    }

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('g95')
}
