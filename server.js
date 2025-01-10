const express = require('express')
const cors = require('cors');

const app = express();
const corsOptions = {
    origin: [''],
    methods: ['POST', 'GET'],
    credentials: true
  }
  
  app.use(cors(corsOptions));
  

app.get('/', (req, res) => {
    res.status(200).send('SERVER IS RUNNING')
  })

  app.listen(4000, () => {
    console.log(`Server is running on http://localhost:4000`);
  });