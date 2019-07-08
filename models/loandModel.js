const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({

     amount:{
      type: Number,
      required: true
     },
     rate: {
        type: Number,
        required: true,

     },
     duration: {
      type: Number,
      required: true
     }

})

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;