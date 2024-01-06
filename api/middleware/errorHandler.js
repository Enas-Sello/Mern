export const createError = (message, status) => {
  const error = new Error();
  error.message = message;
  error.status = status;
  console.error(`Created error: ${status} - ${message}`);
  return error;
};

export const errorHandler = (err, req, res, next) => {
  console.error("Error caught by errorHandler:", err.message);
  res.status(err.status || 500).send({ error: err.message });
};
