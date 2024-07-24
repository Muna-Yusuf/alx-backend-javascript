const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('Stubs', function () {
  let stubUtils;
  let spyConsole;

  beforeEach(() => {
    stubUtils = sinon.stub(Utils, 'calculateNumber').returns(10);
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(() => {
    stubUtils.restore();
    spyConsole.restore();
  });

  it('should call calculateNumber with correct arguments and log the stubbed result', function () {
    sendPaymentRequestToApi(100, 20);

    expect(stubUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
