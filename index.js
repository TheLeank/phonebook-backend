require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
const app = express()

app.use(express.static('build'))
app.use(express.json())
app.use(cors())

morgan.token('body', function(req, res) {return JSON.stringify(req.body)})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.get('/api/persons', (req, res) => {
    Person.find({}).then(person => {
        res.json(person)
    })
})

app.get('/api/persons/:id', (req, res) => {
    Person.findById(req.params.id)
        .then(person => {
            res.json(person)
        })
        .catch(err => {
            res.status(404).end()
        })
})

app.post('/api/persons', (req, res) => {
    const body = req.body
    if(!body.name || !body.number) {
        return res.status(400).json({
            error: 'name or number missing'
        })
    }

    Person.findOne({ name: body.name })
        .then(person => {
            if(!person) {
                const newPerson = new Person({
                    name: body.name,
                    number: body.number,
                })
                newPerson.save()
                    .then(person => {
                        res.json(person)
                    })
            } else {
                Person.updateOne({ name: body.name }, {number: body.number })
                    .then(person => {
                        res.json(person)
                    })
            }
        })
        .catch(err => {
            res.status(400).json({
                error: 'name must be unique'
            })
        })
    

    // const person = new Person({
    //     name: body.name,
    //     number: body.number,
    // })

    // person.save().then(person => {
    //     res.json(person)
    // })
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)
    res.status(204).end()
})

app.get('/info', (req, res) => {
    res.send(
        '<p>Phonebook has info for ' + persons.length + ' people</p>'
        + '<p>' + new Date() + '</p>'
    )
})

const PORT = process.env.PORT
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
