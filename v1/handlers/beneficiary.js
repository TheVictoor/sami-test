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
        res.send(responseData);
        res.end();
      },
      onError: (responseError) => {
        res.status(responseError.statusCode).send(responseError);
      },
    });
  };

  const put = (req, res) => {
    const payload = {
      ...req.params,
    };

    const headers = {
      ...req.headers,
    };

    models.beneficiary.put({
      payload,
      headers,
      onSuccess: (responseData) => {
        res.send(responseData);
        res.end();
      },
      onError: (responseError) => {
        res.status(responseError.statusCode).send(responseError);
      },
    });
  };

  const patch = (req, res) => {
    const payload = {
      ...req.params,
    };

    const headers = {
      ...req.headers,
    };

    models.beneficiary.patch({
      payload,
      headers,
      onSuccess: (responseData) => {
        res.send(responseData);
        res.end();
      },
      onError: (responseError) => {
        res.status(responseError.statusCode).send(responseError);
      },
    });
  };

  const post = (req, res) => {
    const payload = {
      ...req.params,
    };

    const headers = {
      ...req.headers,
    };

    models.beneficiary.post({
      payload,
      headers,
      onSuccess: (responseData) => {
        res.send(responseData);
        res.end();
      },
      onError: (responseError) => {
        res.status(responseError.statusCode).send(responseError);
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
        res.send(responseData);
        res.end();
      },
      onError: (responseError) => {
        res.status(responseError.statusCode).send(responseError);
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
