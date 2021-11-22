let app = require('express')()
const dotenv = require('dotenv')
const notes = require('./data/note')

dotenv.config()

app.get('/', (req, res)=>{
    res.send('salut')
})

app.get('/api/notes/', (req, res)=>{
    res.json(notes)
})

app.get('/api/notes/:id', (req, res)=>{
    const note = notes.find(n =>n._id === req.params.id)
    res.send(note)
})

const PORT = process.env.PORT ||3001 // ||3001 sera le port par défaut

app.listen(PORT, console.log(`running on port ${PORT}`))