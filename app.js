const express = require('express');
const app = express();

// For Security purpose

const apiCallingLimit = require('express-rate-limit');

// Configure Port

require('dotenv').config();

const numberOfCallingAPI = apiCallingLimit({
   windowMs: 5 * 60 * 1000, // 5 Mintue 
   max: 100,
   message: {
    error: "Rate limit exceeded: The user made more request then expected. "
   },

  standardHeaders: true,
  legacyHeaders: false

});

app.use(numberOfCallingAPI);
module.exports = app;

// Get Static Data from here
const staticData = require('./scenarioData/data.js');
app.use(express.json());


// Select one random item from Array
function selectRandomItemFromData(array) {
  return array[Math.floor(Math.random() * array.length)];
}

app.post('/createITScenario', (request, response) => {
  const { technology, role, environment } = request.body;

// If any of the parameter is missing we recevied 422 status code and received error as well

  if(!technology && !role && !environment) {
    return response.status(422).json({ error: "All required fields are missing: technology, role, environment" });
  }
  else if (!technology || !role || !environment) {
    return response.status(422).json({ error: "All fields are require: technology, role, environment" });
  }

  // Here we generate scenario in JSON format

  const scenario = {
    technology,
    role,
    environment,
    scenario: {
      challenge: selectRandomItemFromData(staticData.challenges),
      incident: selectRandomItemFromData(staticData.incidents),
      troubleshootingStep: selectRandomItemFromData(staticData.troubleshootingSteps),
      recommendations: selectRandomItemFromData(staticData.recommendations)
    }
  };

  // Received scenario in JSON

  response.json(scenario);

});