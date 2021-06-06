const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
app.use(express.static('./assets'));
app.use(expressLayouts);

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