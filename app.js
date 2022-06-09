const express = require('express');
const Files = require('edacy-files-walk');
require('dotenv').config();
const app = express();

const { PORT } = process.env;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//AUTOLOAD ROUTES
var routes = Files.walk(__dirname + '/api/modules');

//PUBLICS ROUTES
for (var i = 0; i < routes.length; i++)
    if (routes[i].indexOf('public.routes') !== -1)
        require(routes[i])(app);

    // GUARD MIDDLEWARE
require('./api/modules/auth/auth.guard')(app);

//PRIVATE ROUTES
for (var i = 0; i < routes.length; i++)
    if (routes[i].indexOf('routes') !== -1 && routes[i].indexOf('public.routes') === -1)
        require(routes[i])(app);


    // App listening
app.listen(PORT, () => {
    console.log('Server listening');
})