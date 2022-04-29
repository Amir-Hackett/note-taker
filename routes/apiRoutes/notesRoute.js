const router = require('express').Router()
const { notes } = require('../../db/db')
const { findById, validateNote, createNote, deleteNote} = require('../../lib/notes')

router.get('/notes', (req, res) => {
    res.json(notes)
})

//route listens for a post request
router.post('/notes', (req, res) => {
    
    // set id based on what the next index of the array will be 
    req.body.id = notes.length.toString(); 
 
    // if any data in req.body is incorrect, send error
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.'); 
    
    } else {
        // add note to json file and animals array in this function 
        const note = createNote(req.body, notes); 
 
        res.json(note);
    }
 })

//route listens for the delete request
router.delete('/notes/:id', (req, res) => {
    const note = findById(req.params.id, notes)

    deleteNote(note, notes)
    res.json()
})

module.exports = router