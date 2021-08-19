const path = require('path');
const router = require('express').Router();

//Sends notes to notes.html 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

//Directs you to homepage if a pathing issue exists
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router;