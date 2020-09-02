const beneficiaryWrapper = ({
  server,
  handlers,
  middlewares,
  schemas,
}) => {
  console.log(middlewares);

  /**
  * @swagger
  * /v1/application:
  *   get:
  *     description: some description
  *      produces:
  *       - application/json
  *     parameters:
  *       - name: name
  *         in: query
  *         required: true
  *         type: string
  *      responses:
  *       deafult:
  *         description: default
  */
  server.get('/v1/beneficiary',
    middlewares.schemaValidate(schemas.beneficiary.get.params).params,
    handlers.beneficiary.get);

  /**
  * @swagger
  * /v1/application:
  *   get:
  *     description: some description
  *      produces:
  *       - application/json
  *     parameters:
  *       - name: name
  *         in: query
  *         required: true
  *         type: string
  *      responses:
  *       deafult:
  *         description: default
  */
  server.put('/v1/beneficiary',
    middlewares.schemaValidate(schemas.beneficiary.put.body).body,
    handlers.beneficiary.put);

  /**
  * @swagger
  * /v1/application:
  *   get:
  *     description: some description
  *      produces:
  *       - application/json
  *     parameters:
  *       - name: name
  *         in: query
  *         required: true
  *         type: string
  *      responses:
  *       deafult:
  *         description: default
  */
  server.patch('/v1/beneficiary',
    middlewares.schemaValidate(schemas.beneficiary.patch.body).body,
    handlers.beneficiary.patch);

  /**
  * @swagger
  * /v1/application:
  *   get:
  *     description: some description
  *      produces:
  *       - application/json
  *     parameters:
  *       - name: name
  *         in: query
  *         required: true
  *         type: string
  *      responses:
  *       deafult:
  *         description: default
  */
  server.post('/v1/beneficiary',
    middlewares.schemaValidate(schemas.beneficiary.post.body).body,
    handlers.beneficiary.post);

  /**
  * @swagger
  * /v1/application:
  *   get:
  *     description: some description
  *      produces:
  *       - application/json
  *     parameters:
  *       - name: name
  *         in: query
  *         required: true
  *         type: string
  *      responses:
  *       deafult:
  *         description: default
  */
  server.del('/v1/beneficiary',
    middlewares.schemaValidate(schemas.beneficiary.del.params).params,
    handlers.beneficiary.del);
};

module.exports = beneficiaryWrapper;
