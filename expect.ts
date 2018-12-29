import chai = require('chai');
import chai_as_promise = require('chai-as-promised')
chai.use(chai_as_promise);

const expect = chai.expect;

export const include = expected => actual => expect(actual).to.eventually.include(expected);

export const equals = expected => actual => expect(actual).to.eventually.eq(expected);
