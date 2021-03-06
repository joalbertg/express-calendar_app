const badRequest = (error, res, message) =>
  res.status(400).json(responseBody(error, message));

const serverError = (error, res, message) =>
  res.status(500).json(responseBody(error, message));

const forbiddenRequest = (error, res, message) =>
  res.status(403).json(responseBody(error, message));

const notFoundRequest = (error, res, message) =>
  res.status(404).json(responseBody(error, message));

const unauthorizedRequest = (error, res, message) =>
  res.status(401).json(responseBody(error, message));

const responseBody = (error, message) => ({
  ok: false,
  error: message ? { message } : error
});

module.exports = {
  badRequest,
  serverError,
  forbiddenRequest,
  notFoundRequest,
  unauthorizedRequest
};

