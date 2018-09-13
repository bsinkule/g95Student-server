const express = require('express')
const router = express.Router()
const knex = require('../db/connection')

const queries = require('../db/g95Queries')

router.get('/', (req, res) => {
    queries.getAll() 
        .then(students => {
            res.json({
                data: students
            })
        })
})

router.get('/:firstName', (req, res) => {
    queries.getOne(req.params.firstName) 
        .then(oneStudent => {
            res.json({
                student: oneStudent[0] 
            })
        })
})

router.post('/', (req, res) => {
    const body = req.body
    
    queries.postOne(body) 
        .then(postNewStudent => {
            res.json({
                posted: postNewStudent[0]
            })
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const body = req.body

    queries.updateOne(id, body)
        .then(updateStudent => {
            res.json({
                updated: updateStudent[0]
            })
        })
})

router.delete('/:id', (req, res) => {
    queries.deleteOne(req.params.id) 
        .then(deleteStudent => {
            res.json({ deleted: deleteStudent[0]})
        })
})

module.exports = router