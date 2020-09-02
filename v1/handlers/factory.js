const beneficiaryWrapper = require('./beneficiary');

module.exports = (models) => ({
  beneficiary: beneficiaryWrapper(models),
});
