const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('Spies', function () {
  let spyUtils;
  let spyConsole;

  beforeEach(() => {
    spyUtils = sinon.spy(Utils, 'calculateNumber');
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spyUtils.restore();
    spyConsole.restore();
  });

  it('should call calculateNumber with correct arguments and log the correct message', function () {
    sendPaymentRequestToApi(100, 20);

    expect(spyUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
  });
});
