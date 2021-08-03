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

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
        .then(person => {
            res.json(person)
        })
        .catch(err => next(err))
})

app.post('/api/persons', (req, res, next) => {
    const newPerson = new Person({
        name: req.body.name,
        number: req.body.number,
    })

    newPerson.save()
        .then(personSaved => res.json(personSaved))
        .catch(err => next(err))
})

app.put('/api/persons/:id', (req, res, next) => {
    const newPerson = {
        name: req.body.name,
        number: req.body.number,
    }
    
    Person.findByIdAndUpdate(
        req.params.id,
        newPerson,
        { new: true, runValidators: true }
    )
    .then(updatedPerson => res.json(updatedPerson))
    .catch(err => next(err))
    
})

app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndDelete(req.params.id)
        .then(result => res.status(204).end())
        .catch(err => next(err))
})

app.get('/info', (req, res, next) => {
    Person.countDocuments({})
        .then(docs => {
            res.send(
                '<p>Phonebook has info for ' + docs + ' people</p>'
                + '<p>' + new Date() + '</p>'
            )
        })
        .catch(err => next(err))

})

const errorHandler = (err, req, res, next) => {
    if (err.name === "CastError") {
        return res.status(400).send({ error: 'malformatted id' })
    } else {
        console.log(err)
    }
    next(err)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
