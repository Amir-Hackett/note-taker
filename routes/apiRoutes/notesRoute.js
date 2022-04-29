const router = require('express').Router()
const { v4: uuidv4 } = require('uuid')
const { notes } = require('../../db/db')
const { findById, createNote, editNote, deleteNote } = require('../../lib/notes')

router.get('/notes', (req, res) => {
    res.json(notes)
})

//route listens for a post request
router.post('/notes', (req, res) => {
    
    if (!req.body.id) {
        req.body.id = uuidv4()
        createNote(req.body, notes)
    } else {
        editNote(req.body, notes)
    }

    res.json(req.body)
})

//route listens for the delete request
router.delete('/notes/:id', (req, res) => {
    const note = findById(req.params.id, notes)

    deleteNote(note, notes)
    res.json()
})

module.exports = router