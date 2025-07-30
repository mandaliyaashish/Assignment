
// Server file, Require when we want to run project

const app = require('./app');

app.listen(process.env.PORT, async() => {
    console.log('Server is running at http://localhost:' + process.env.PORT);

});