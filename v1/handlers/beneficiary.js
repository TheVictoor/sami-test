const beneficiaryWrapper = (models) => {
  const get = (req, res) => {
    const payload = {
      ...req.params,
    };

    const headers = {
      ...req.headers,
    };

    models.beneficiary.get({
      payload,
      headers,
      onSuccess: (responseData) => {
        res.send(responseData.statusCode, responseData);
        res.end();
      },
      onError: (responseError) => {
        res.send(responseError.statusCode || 500, responseError);
      },
    });
  };

  const put = (req, res) => {
    const payload = {
      ...req.body,
      ...req.params,
    };

    const headers = {
      ...req.headers,
    };

    models.beneficiary.put({
      payload,
      headers,
      onSuccess: (responseData) => {
        res.send(responseData.statusCode, responseData);
        res.end();
      },
      onError: (responseError) => {
        res.send(responseError.statusCode || 500, responseError);
      },
    });
  };

  const patch = (req, res) => {
    const payload = {
      ...req.body,
      ...req.params,
    };

    const headers = {
      ...req.headers,
    };

    models.beneficiary.patch({
      payload,
      headers,
      onSuccess: (responseData) => {
        res.send(responseData.statusCode, responseData);
        res.end();
      },
      onError: (responseError) => {
        res.send(responseError.statusCode || 500, responseError);
      },
    });
  };

  const post = (req, res) => {
    const payload = {
      ...req.body,
    };

    const headers = {
      ...req.headers,
    };

    models.beneficiary.post({
      payload,
      headers,
      onSuccess: (responseData) => {
        res.send(responseData.statusCode, responseData);
        res.end();
      },
      onError: (responseError) => {
        res.send(responseError.statusCode || 500, responseError);
      },
    });
  };

  const del = (req, res) => {
    const payload = {
      ...req.params,
    };

    const headers = {
      ...req.headers,
    };

    models.beneficiary.del({
      payload,
      headers,
      onSuccess: (responseData) => {
        res.send(responseData.statusCode, responseData);
        res.end();
      },
      onError: (responseError) => {
        res.send(responseError.statusCode || 500, responseError);
      },
    });
  };

  return {
    get,
    del,
    put,
    post,
    patch,
  };
};

module.exports = beneficiaryWrapper;
