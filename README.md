<h2>API - Random IT Scenario Generator</h2>

<h3>=> Features</h3>

* Generates realistic IT scenarios: challenge, incident, troubleshooting
* Accepts technology, role, and environment via POST request
* Clean JSON output for frontend/API use
* Rate limiting included to prevent abuse
* Lightweight and easy to set up

<h3>=> Project Structure</h3>

assignment/
<br>├── ScenarioData/
<br>&nbsp;   └── data.js </t>&nbsp;&nbsp;             # Dataset for challenges, incidents, and steps
<br>├── test/
<br>&nbsp;   └── test.js &nbsp;&nbsp;            # Jest test cases
<br>├── app.js        &nbsp;&nbsp;          # Express app setup (logic only)
<br>├── server.js      &nbsp;&nbsp;         # Server entry point (runs the app)
<br>├── package.json
<br>├── package-lock.json
<br>├── .gitignore       &nbsp;&nbsp;       # Git ignored files

<h3>=> Setup Instructions</h3> 

1. Clone the Repository

* git clone https://github.com/mandaliyaashish/Assignment.git
* cd Assignment
* npm install

2. Create Environment File

* Create a .env file in the root folder with:
* PORT=3000

3. Run the Project

* open terminal and write command <br>
-> node server <br>
-> The server will start at: http://localhost:3000

* Run Tests <br>
-> npm test

<h3>=> To see output</h3>

* Open Postman tool <br>
* Run server (open terminal and write down 'node server') <br>
* Write down URL on postman: http://localhost:3000 <br>
* Sent parameter in body (technology, role, environment)



