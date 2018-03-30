const config = require('config');
const bodyParser = require('body-parser');
const express = require('express');
const adverseEventsController = require('./api/controllers/adverseEvents.controller');
const { auth, errorHandler } = require('./middleware');

// App Setup.
const app = express();
app.use(bodyParser.json());

// Exposed Routes:
app.get('/adverse-events', adverseEventsController.listAdverseEvents);
app.get('/adverse-event/:id', adverseEventsController.getAdverseEventById);

// Protected Routes:
app.post('/adverse-event/:id', auth, adverseEventsController.createAdverseEvent);
app.put('/adverse-event/:id', auth, adverseEventsController.updateAdverseEvent);
app.delete('/adverse-event/:id', auth, adverseEventsController.deleteAdverseEvent);

// Apply Middleware.
app.use(errorHandler);

// Start the Express Server.
const application = config.get('application');
const port = application.get('port');

app.listen(port, () => console.info(`Application Running on Port: ${port}.`));
