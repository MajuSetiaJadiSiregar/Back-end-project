console.log('test nodemon');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
   res.json({msg : 'test router'});
})
app.listen(6969, () => { console.log('server run di port 6969')});