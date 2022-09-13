import express from 'express';
import axios from 'axios';

const jsonParser = express.json()
const app = express();

app.get(`/rates`, jsonParser, (req, res) => {
    axios.get(`https://api.coincap.io/v2/rates/${req.query.currency}`)
    .then((response)=>{
        res.json({usd:response.data.data.rateUsd})
    })
    
    .catch((error)=> {
            console.log(error);
            res.status(404).send(
                `No data found for '${req.query.currency}'. Check the request.`
            )
        });
})

const PORT = 3000
app.listen(3000, () => {
    console.log(`Server started: http://locallhost:${PORT}`)
})