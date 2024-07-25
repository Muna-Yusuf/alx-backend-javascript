const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
  describe('when called with true', () => {
    it('should resolve correctly', (done) => {
      getPaymentTokenFromAPI(true)
        .then((response) => {
          expect(response).to.include({ data: 'Successful response from the API' });
          done();
        })
        .catch((error) => done(error));
    });
  });
});
