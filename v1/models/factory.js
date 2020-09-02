const beneficiaryWrapper = require('./beneficiary');

module.exports = (dependencies) => ({
  beneficiary: beneficiaryWrapper(dependencies),
});
