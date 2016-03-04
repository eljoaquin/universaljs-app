import express from 'express';
import hogan from 'hogan-express';
import React from 'react';
import {match, RouterContext} from 'react-router';
import routes from './routes.jsx';
import ReactDOMServer from 'react-dom/server'

const app = express();

app.set('port', 3000);
app.set('views', `${__dirname}/views`);
app.engine('html', hogan);
app.use(express.static('public'));


app.get('*', (request, respond) => {

    match({routes, location: request.url}, (error, redirectLocation, renderProps) => {

        const reactMarkup = ReactDOMServer.renderToStaticMarkup(<RouterContext {...renderProps} />);

        respond.locals.reactMarkup = reactMarkup;

        respond.render('index.html')
    });

});

app.listen(3000, () => {
    console.log('it is alive!!');
});