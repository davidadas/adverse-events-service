/**
 *
 * @param error
 * @param req
 * @param res
 * @param next
 */
const errorHandler = (error, req, res, next) => {
  if (error.status) {
    res.status(error.status).send({ message: error.message });
  } else {
    res.status(500).send({
      message: error,
    });
    next(error);
  }
};

module.exports = errorHandler;
