const express = require('express');
const loanRouter = express.Router()
const Loan = require('../../models/loandModel');


loanRouter.post('/', async (req, res) => {

    try {
        //destructure req body
        const { amount,rate,duration} = req.body;
        let loan = new Loan({amount, rate, duration});
        await loan.save();
        res.json(loan)

    } catch (error) {
          res.json(error)
    }

})

module.exports = loanRouter;