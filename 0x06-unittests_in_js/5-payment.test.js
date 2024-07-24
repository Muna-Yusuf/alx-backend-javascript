const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('Hooks', function () {
  let spyConsole;

  beforeEach(() => {
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spyConsole.restore();
  });

  it('should log correctly for totalAmount = 100 and totalShipping = 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log correctly for totalAmount = 10 and totalShipping = 10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(spyConsole.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
