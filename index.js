const express = require('express')
var bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.json());


function calculateSum(counter){
    sum = 0;
    for(var i=1;i<=counter;i++){
        sum += i;
    }
    return sum;
}


function handle(req,res){
    var counter = req.query.counter;

    var calculatedSum = calculateSum(counter);

    var answerObj = {
        sum: calculatedSum,
    };

    res.status(200).send(answerObj);
    
}
app.get('/handleSum', handle);

function post(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, post)