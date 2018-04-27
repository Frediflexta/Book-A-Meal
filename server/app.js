// import express for running the http requests
import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes/routeMeals';

// this returns an instance of our application
const app = express();

// middleware to parse data i/o as json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// route to GET meals
app.use('/api/v1/getmeals', routes);

// route to POST meals
app.use('/api/v1/addmeal', routes);

// creates a port for the app
const port = process.env.PORT || 8080;

// listenings to the app as we build
app.listen(port, () => {
   console.log(`Express server is running on ${port}`);
});
