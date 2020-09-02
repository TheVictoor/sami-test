const beneficiaryWrapper = require('./beneficiary');

module.exports = ({ server, ...rest }) => {
  beneficiaryWrapper({
    server,
    ...rest,
  });

  return server;
};
