const beneficiaryWrapper = ({
  server,
  handlers,
  middlewares,
  schemas,
}) => {
  /**
   * @swagger
   * definitions:
   *  Beneficiary:
   *    type: "object"
   *    properties:
   *      name:
   *        type: "string"
   *      CPF:
   *        type: "string"
   *      RG:
   *        type: "string"
   *      birthDate:
   *        type: "string"
   *        format: "date"
   *      dependentsAmount:
   *        type: "integer"
   *      planType:
   *        type: "string"
   *        description: "Plan Type"
   *        enum:
   *        - "basic"
   *        - "standard"
   *        - "premium"
   */

  /**
   * @swagger
   * /v1/beneficiaries/{id}:
   *   get:
   *     description: Get a beneficiary
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         type: string
   *         required: false
   *     responses:
   *       deafult:
   *         description: default
   */
  server.get('/v1/beneficiaries/:id',
    middlewares.schemaValidate(schemas.beneficiary.get.paramsRequired).params,
    handlers.beneficiary.get);

  /**
   * @swagger
   * /v1/beneficiaries:
   *   get:
   *     description: Get all beneficiaries
   *     produces:
   *       - application/json
   *     responses:
   *       deafult:
   *         description: default
   */
  server.get('/v1/beneficiaries',
    middlewares.schemaValidate(schemas.beneficiary.get.paramsOptional).params,
    handlers.beneficiary.get);

  /**
   * @swagger
   * /v1/beneficiaries/{id}:
   *   put:
   *     description: some description
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         type: string
   *         required: true
   *       - in: "body"
   *         name: "body"
   *         required: true
   *         schema:
   *           $ref: "#/definitions/Beneficiary"
   *     responses:
   *       deafult:
   *         description: default
   */
  server.put('/v1/beneficiaries/:id',
    middlewares.schemaValidate(schemas.beneficiary.put.body).body,
    middlewares.schemaValidate(schemas.beneficiary.put.params).params,
    handlers.beneficiary.put);

  /**
   * @swagger
   * /v1/beneficiaries/{id}:
   *   patch:
   *     description: some description
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         type: string
   *         required: true
   *       - in: "body"
   *         name: "body"
   *         required: true
   *         schema:
   *           $ref: "#/definitions/Beneficiary"
   *     responses:
   *       deafult:
   *         description: default
   */
  server.patch('/v1/beneficiaries/:id',
    middlewares.schemaValidate(schemas.beneficiary.patch.body).body,
    middlewares.schemaValidate(schemas.beneficiary.patch.params).params,
    handlers.beneficiary.patch);

  /**
   * @swagger
   * /v1/beneficiaries:
   *   post:
   *     description: some description
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: "body"
   *         name: "body"
   *         required: true
   *         schema:
   *           $ref: "#/definitions/Beneficiary"
   *     responses:
   *       deafult:
   *         description: default
   */
  server.post('/v1/beneficiaries',
    middlewares.schemaValidate(schemas.beneficiary.post.body).body,
    handlers.beneficiary.post);

  /**
   * @swagger
   * /v1/beneficiaries/{id}:
   *   delete:
   *     description: some description
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       deafult:
   *         description: default
   */
  server.del('/v1/beneficiaries/:id',
    middlewares.schemaValidate(schemas.beneficiary.del.params).params,
    handlers.beneficiary.del);
};

module.exports = beneficiaryWrapper;
