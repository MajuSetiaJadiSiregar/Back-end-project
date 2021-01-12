require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT;
const api = process.env.API_URL;

/**middleware */
app.use(bodyParser.json());
app.get('/', (req, res) => {
   res.json({ msg : 'test router'});
});

app.get(`${api}/products` , (req, res) => {
   const dataProduct = {
      id :1,
      product : 'kertas',
      price : '6000'
   }
   res.json({product : dataProduct})
});

app.post(`${api}/products` ,(req, res) => {
   const newProduct = req.body;
   console.log(newProduct);
    res.json(newProduct);
});


app.listen(PORT, () => { console.log(`server run di port ${PORT}`)});