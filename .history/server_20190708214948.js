const express = require('express');
const loanRouter = require('./routes/api/loan');
const mongoose = require('mongoose');
const app = express();


//DB Connection
mongoose.connect('mongodb://localhost/loanCalculator', {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log("DB Connected successfully"));


//MIDDLEWARE
app.use(express.json())

app.get('/', (req, res) => {
    res.json({app:""})
})
//SERVING ROUTES
app.use('/api/loan', loanRouter)




const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})