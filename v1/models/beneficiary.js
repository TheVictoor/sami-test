const beneficiatyWrapper = ({
  config,
}) => {
  const get = ({
    payload,
    headers,
    onSuccess,
    onError,
  }) => {
    try {
      return onSuccess({
        statusCode: 200,
        data: {
          ...headers,
          name: config.app.name,
          port: config.app.port,
          payload,
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

  const post = ({
    payload,
    headers,
    onSuccess,
    onError,
  }) => {
    try {
      return onSuccess({
        statusCode: 200,
        data: {
          ...headers,
          name: config.app.name,
          port: config.app.port,
          payload,
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

  const put = ({
    payload,
    headers,
    onSuccess,
    onError,
  }) => {
    try {
      return onSuccess({
        statusCode: 200,
        data: {
          ...headers,
          name: config.app.name,
          port: config.app.port,
          payload,
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

  const patch = ({
    payload,
    headers,
    onSuccess,
    onError,
  }) => {
    try {
      return onSuccess({
        statusCode: 200,
        data: {
          ...headers,
          name: config.app.name,
          port: config.app.port,
          payload,
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

  const del = ({
    payload,
    headers,
    onSuccess,
    onError,
  }) => {
    try {
      return onSuccess({
        statusCode: 200,
        data: {
          ...headers,
          name: config.app.name,
          port: config.app.port,
          payload,
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

module.exports = beneficiatyWrapper;
