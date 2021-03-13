const mongoose = require('mongoose');
const employeSchema =new  mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    address: {
        type: String,
        required:true
    },
    city: {
        type: String,
        required:true
    },
    zip: {
        type: Number,
        required:true
    },
})

const employe = mongoose.model('EmployDetail', employeSchema);
module.exports = employe;