const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static('./assets'));
app.use(expressLayouts);

app.set('layout extractStyles',true);
app.set('layout extractScript',true);

//use express router
app.use('/',require('./routes'));
app.set('view engine', 'ejs');
app.set('views','./views');


app.listen(port, function(error){
    if(error){
        //console.log('Error in running the server : ',error);
        console.log(`Error in running the server : ${error}`); // interpolation
    }
    console.log(`Server running on port : ${port}`);
});