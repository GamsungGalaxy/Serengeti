const request = require('supertest');

import regeneratorruntime from 'regenerator-runtime';

const path = require('path');

const server = 'http://localhost:3000';

const fs = require('fs');

describe('/GET api/findBook', () => {
  describe('successful API calls', () => {

    it('should respond with status 200', async () => {
      const response = await request(server).get('/api/findBook');
      expect(response.statusCode).toBe(200);
    });
  
    it('should return a json object', async () => {
      // return request(server)
      //   .get('/api/findBook')
      //   .expect('Content-Type', /application\/json/)
      //   .expect(200);
      const response = await request(server).get('/api/findBook');
      // expect(response.header['content-type']).toEqual(expect.stringContaining('json'));
      expect(response.header['content-type']).toMatch(/json/);
      expect(response.body).toEqual({});
    });
  
  // should respond with status 400

  // should return an error mesesage
  });
});
