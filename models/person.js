const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URI
console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => {
      console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

// modificar la declaración del schema para introducir validación
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: String,
        required: true
    },
})

// cargar el plugin para poder entender la propiedad unique (imagino)
schema.plugin(uniqueValidator)

schema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', schema)