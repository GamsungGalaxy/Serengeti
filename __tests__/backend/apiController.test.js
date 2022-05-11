const request = require('supertest');

import regeneratorruntime from 'regenerator-runtime';

const path = require('path');

const server = 'http://localhost:3000';

const fs = require('fs');

const apiController = require('../../server/controllers/apiController');

// apiController.findBook = jest.fn();
// const mockFunction = jest.fn(apiController.findBook);

describe('apiController.findBook', () => {
  describe('expect proper response with valid get request', () => {
    it('responds with status code 200', async () => {
      const response = await apiController.findBook({body:{isbn: '9781400079988'}}, {locals:{}})
      console.log('response in test is: ', response);
      expect(response).toContain({});
    });
  });
});