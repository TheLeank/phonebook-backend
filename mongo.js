const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://reactbootcamp:${password}@cluster0.o3r7f.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv[3] === undefined || !process.argv[4] === undefined) {
    Person.find({}).then(result => {
        console.log(result);
        console.log('phonebook:')
        result.forEach(person => {
          console.log(person.name, person.number)
        })
        mongoose.connection.close()
    })
} else {
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4]
      })
      
      person.save().then(result => {
        console.log(`added ${process.argv[3]} number to phonebook`)
        mongoose.connection.close()
      })
}


