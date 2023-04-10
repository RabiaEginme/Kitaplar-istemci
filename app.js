const express = require('express');
var cors = require('cors')
const app = express();



app.use(cors())

const COLLECTIONS_DUMP = require('./kitaplar.json')
const PORT = 3000;

app.get('/', function(req, res) {
    res.json(
        COLLECTIONS_DUMP
    );
  });

  app.use('/search-by-name', (req, res, next) => {
    const filters = req.query;
    const filteredUsers = COLLECTIONS_DUMP.filter(user => {
        let isValid = true;
        isValid = isValid && user.name.toLowerCase().includes(filters.name.toLowerCase());
        return isValid;
    });
    res.json(filteredUsers);
  });



  app.listen(3000, function(req, res) {
    console.log("Server is running at port 3000");
  });