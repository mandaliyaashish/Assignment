/* 

Here we write down tests for our code

Test 1: When every parameters we sent
Test 2: No parameters sent 
Test 3: When any missing parameter 

*/

const request = require('supertest');
const app = require('../app');

describe('/createITScenario', () => {


    // Test 1:

    it('Valid response recevied', async() => {

        const response = await request(app).post('/createITScenario').send({

            technology: 'Cloud Computing',
            role: 'System Admin',
            environment: 'On-Prem Data Center'

        });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('scenario');
        expect(response.body.scenario).toHaveProperty('challenge');
        expect(response.body.scenario).toHaveProperty('incident');
        expect(response.body.scenario).toHaveProperty('troubleshootingStep');
        expect(response.body.scenario).toHaveProperty('recommendations');
    });

    // Test 2:

    it('All require fields are missing: technology, role, environment', async () => {

        const response = await request(app).post('/createITScenario').send({

        })

        expect(response.statusCode).toBe(422);
        expect(response.body).toHaveProperty('error');

    });

    // Test 3:

    it('All fields are require: technology, role, environment', async () => {

        const response = await request(app).post('/createITScenario').send({
            technology: 'Cloud Computing',
        });

        expect(response.statusCode).toBe(422);
        expect(response.body).toHaveProperty('error');

    });

});
