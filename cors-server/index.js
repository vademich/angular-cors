const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.options('*', cors());
const PORT = 5000;

app.listen(PORT,()=>console.log(`server running on port ${PORT}`))

app.get('/',(req,res)=>{
    res.send("Welcome to CORS server! 😁")
})

const sweets = [{'candy':'bubble-gum'}];
 
app.get("/candy", function(_, res){
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.send(sweets);
});

app.post("/postcandy", function (req, res) {
    res.header(
        'Access-Control-Allow-Origin', 'http://localhost:4200',
        'Access-Control-Allow-Methods', 'POST',
        );
    const sweet = {candy: req.body.candy};
    sweets.push(sweet);
    res.send(sweet);
});
