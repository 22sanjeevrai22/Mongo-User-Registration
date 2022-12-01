
const express = require('express');
const loginRouter = require('./router/route')
const mongoose = require('mongoose')
const app = express()


app.use(express.json({
    urlencoded : true
}))

mongoose.connect('mongodb+srv://22sanjeevrai22:<vervain1628>@cluster0.tyfghmt.mongodb.net/?retryWrites=true&w=majority', (err) =>{
    if(err){
        console.log('Yo bro, you have error', err)
    }
    console.log('Yo database is connected successfully')
})

app.use('/', loginRouter)

app.listen(8000,()=>{
    console.log('Yo this is console of port 8k')
})
