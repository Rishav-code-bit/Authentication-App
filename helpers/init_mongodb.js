const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017', {dbName: "authentication_app"})
.then(() => {
    console.log('mongodb connected.')
})
.catch(err => console.log(err.message))