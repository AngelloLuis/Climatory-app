const express = require('express');
const app = express();

//settings
app.use('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());

//Routes
app.use(require('./routes/employees'));

//Starting the server
app.listen(3000 , () => {
    console.log('server on port 3000');
})