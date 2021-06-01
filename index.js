const express = require('express');
const app = express();
const port = 8000;

//use express router
app.use('/',require('./routes'));
app.use('view engine', 'ejs');
app.use('views','./views');


app.listen(port, function(error){
    if(error){
        //console.log('Error in running the server : ',error);
        console.log(`Error in running the server : ${error}`); // interpolation
    }
    console.log(`Server running on port : ${port}`);
});