const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    reg_no: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    hostel_name : {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
})

const Payment = mongoose.model('Payment', paymentSchema)

module.exports = Payment