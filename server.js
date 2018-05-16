const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 5000;

// app.use(express.static(path.resolve(__dirname, './react-ui/build')));

// app.get('*', function(request, response) {
//   response.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
// });

app.listen(port, () => console.log('Example app listening on port 5000!'));


// set view ???
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));
// app.listen(3000);

app.get('/',function(req,res) {
    res.render('home');
});
