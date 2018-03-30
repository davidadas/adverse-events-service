const adverseEvents = require('../services/adverseEventsQuery.service');

/**
 * AdverseEvent type definition.
 * @typedef {Object} AdverseEvent
 * @property safetyReportId
 * @property receiveDate
 * @property receiptDate
 * @property companyNumb
 */

/**
 * Private function to pass errors to error middleware.
 * @param {Function} next the Express next function.
 * @private
 */
const expressError = next => err => next(err);

/**
 * Private method to verify that an adverse event entry exists in the data.
 * @param {Number} id the adverse event's identifier.
 * @private
 */
const verifyAdverseEvent = id => adverseEvents
  .getAdverseEventById(id)
  .tap((adverseEvent) => {
    if (!adverseEvent) {
      return Promise.reject({
        status: 404,
        message: 'No Such Adverse Event.',
      });
    }
    return adverseEvent;
  });

/**
 *
 * @param {Object} req the request object from Express.
 * @param {Object} res the response object from Express.
 * @param {Function} next the 'next' method provided by Express.
 * @returns {Promise}
 */
const listAdverseEvents = (req, res, next) => {
  const { query } = req;
  let { limit, offset } = query;
  const { order } = query;

  limit = parseInt(limit, 10);
  offset = parseInt(offset, 10);

  return adverseEvents.listAdverseEvents(query, limit, offset, order)
    .then(adverseEventList => res.send(adverseEventList))
    .catch(expressError(next));
};

/**
 *
 * @param {Object} req the request object from Express.
 * @param {Object} res the response object from Express.
 * @param {Function} next the 'next' method provided by Express.
 * @returns {Promise}
 */
const getAdverseEventById = (req, res, next) => {
  const { id } = req.params;

  return verifyAdverseEvent(id)
    .then(adverseEvent => res.send(adverseEvent))
    .catch(expressError(next));
};

/**
 *
 * @param {Object} req the request object from Express.
 * @param {Object} res the response object from Express.
 * @param {Function} next the 'next' method provided by Express.
 * @returns {Promise}
 */
const createAdverseEvent = (req, res, next) => {
  const params = req.body;
  const { id } = req.params;

  if (!id || !params.safetyReportId || !params.receiveDate || !params.receiptDate) {
    return res.status(412).send();
  }

  return adverseEvents.createAdverseEvent(Object.assign({}, params, { id }))
    .then(newEntry => res.status(201).send(newEntry))
    .catch(expressError(next));
};

/**
 *
 * @param {Object} req the request object from Express.
 * @param {Object} res the response object from Express.
 * @param {Function} next the 'next' method provided by Express.
 * @returns {Promise}
 */
const updateAdverseEvent = (req, res, next) => {
  const { id } = req.params;
  const params = req.query;

  // First check that the adverse event exists.
  // Afterwards, perform the DB update.
  return verifyAdverseEvent(id)
    .then(() => adverseEvents.updateAdverseEvent(id, params))
    .then(() => res.status(204).send())
    .catch(expressError(next));
};

/**
 *
 * @param {Object} req the request object from Express.
 * @param {Object} res the response object from Express.
 * @param {Function} next the 'next' method provided by Express.
 * @returns {Promise}
 */
const deleteAdverseEvent = (req, res, next) => {
  const { id } = req.params;
  return verifyAdverseEvent(id)
    .then(() => adverseEvents.deleteAdverseEvent(id))
    .then(() => res.status(202).send())
    .catch(expressError(next));
};

module.exports = {
  listAdverseEvents,
  getAdverseEventById,
  createAdverseEvent,
  updateAdverseEvent,
  deleteAdverseEvent,
};
