/* eslint-disable consistent-return */

module.exports = (schema) => ({
  query: (req, res, next) => {
    try {
      const queryIsValid = schema.validate(req.query);
      if (!queryIsValid.error) return next();
      res.send(400, queryIsValid.error.details);
    } catch (error) {
      res.send(500, error.message);
      res.end();
    }
  },
  params: (req, res, next) => {
    try {
      const paramsIsValid = schema.validate(req.params);
      if (!paramsIsValid.error) return next();
      res.send(400, paramsIsValid.error.details);
    } catch (error) {
      res.send(500, error.message);
      res.end();
    }
  },
  body: (req, res, next) => {
    try {
      const bodyIsValid = schema.validate(req.body);
      if (!bodyIsValid.error) return next();
      res.send(400, bodyIsValid.error.details);
    } catch (error) {
      res.send(500, error.message);
      res.end();
    }
  },
});
