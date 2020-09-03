const beneficiaryWrapper = ({
  database,
  uuid,
}) => {
  const get = async ({
    payload,
    onSuccess,
    onError,
  }) => {
    try {
      const databaseInstance = await database.getDb('sami');

      let statusCode = 200;
      const filter = {};

      if (payload.id) filter.id = payload.id;
      const beneficiary = await databaseInstance
        .collection('beneficiary')
        .find(filter)
        .toArray();

      if (!beneficiary.length) statusCode = 404;

      return onSuccess({
        statusCode,
        data: {
          beneficiary,
        },
      });
    } catch (error) {
      const retorno = {
        statusCode: 500,
        message: error.message,
      };
      return onError(retorno);
    }
  };

  const post = async ({
    payload,
    onSuccess,
    onError,
  }) => {
    try {
      const databaseInstance = await database.getDb('sami');
      const id = uuid();

      await databaseInstance.collection('beneficiary').insertOne({
        ...payload,
        id,
      });

      return onSuccess({
        statusCode: 201,
        data: {
          id,
        },
      });
    } catch (error) {
      const retorno = {
        statusCode: 500,
        message: error.message,
      };
      return onError(retorno);
    }
  };

  const put = async ({
    payload,
    onSuccess,
    onError,
  }) => {
    try {
      const databaseInstance = await database.getDb('sami');
      const { id, ...data } = payload;
      let statusCode = 200;

      const updated = await databaseInstance.collection('beneficiary').findOneAndReplace({ id }, { ...data, id });

      if (!updated.value) statusCode = 404;

      return onSuccess({
        statusCode,
        data: {
          message: statusCode === 200 ? 'Object replaced' : 'Object not found',
        },
      });
    } catch (error) {
      const retorno = {
        statusCode: 500,
        message: error.message,
      };
      return onError(retorno);
    }
  };

  const patch = async ({
    payload,
    onSuccess,
    onError,
  }) => {
    try {
      const databaseInstance = await database.getDb('sami');
      const { id, ...data } = payload;
      let statusCode = 200;

      const updated = await databaseInstance
        .collection('beneficiary')
        .findOneAndUpdate({ id }, {
          $set: { ...data },
        });

      if (!updated.value) statusCode = 404;

      return onSuccess({
        statusCode,
        data: {
          message: statusCode === 200 ? 'Object replaced' : 'Object not found',
        },
      });
    } catch (error) {
      const retorno = {
        statusCode: 500,
        message: error.message,
      };
      return onError(retorno);
    }
  };

  const del = async ({
    payload,
    onSuccess,
    onError,
  }) => {
    try {
      const databaseInstance = await database.getDb('sami');
      let statusCode = 200;

      const beneficiary = await databaseInstance
        .collection('beneficiary')
        .findOneAndDelete({ id: payload.id });

      if (beneficiary.ok !== 1) statusCode = 404;

      return onSuccess({
        statusCode,
        data: {
          message: statusCode === 200 ? `deleted ${payload.id}` : 'not deleted',
        },
      });
    } catch (error) {
      const retorno = {
        statusCode: 500,
        message: error.message,
      };
      return onError(retorno);
    }
  };

  return {
    get,
    put,
    del,
    post,
    patch,
  };
};

module.exports = beneficiaryWrapper;
