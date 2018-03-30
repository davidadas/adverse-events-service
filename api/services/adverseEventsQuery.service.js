const config = require('config');
const { AdverseEvents } = require('../models');

// Initializes Defaults.
const application = config.get('application');
const { maxResults, defaultResults } = application;

/**
 * Private method to reduce an Object literal's undefined values.
 * @param {Object} params the params to reduce.
 * @private
 */
const reduceUndefined = params => Object.keys(params)
  .reduce((acc, key) => {
    if (params[key] !== undefined) {
      acc[key] = params[key];
    }
    return acc;
  }, {});

/**
 * Returns a list of adverse events from the DB.
 * @param {AdverseEvent} params the adverse event.
 * @param {Number} [limit] the query limit argument.
 * @param {Number} [offset] the query offset argument.
 * @param {Array.<Array>} [order] the ordering method.
 * @returns {Promise.<Array>}
 */
const listAdverseEvents = (params, limit, offset = 1, order = []) => {
  const {
    safetyReportId, receiveDate, receiptDate, companyNumb,
  } = params;
  let dbLimit = limit;
  let dbOffset = offset;
  const dbOrder = order.map(orderBy => orderBy.split(','));

  if (!limit || limit > maxResults) {
    dbLimit = defaultResults;
  }

  if (!offset) {
    dbOffset = 0;
  }

  let whereClause = {
    safetyReportId,
    receiveDate,
    receiptDate,
    companyNumb,
  };

  whereClause = reduceUndefined(whereClause);

  return AdverseEvents
    .findAll({
      where: whereClause,
      limit: dbLimit,
      offset: dbOffset,
      order: dbOrder,
    });
};

/**
 * Returns a specific adverse event using the provided adverse event identifier.
 * @param {Number} id the AdverseEvent identifier.
 * @returns {Promise.<Object>}
 */
const getAdverseEventById = id => AdverseEvents.findById(id);

/**
 * Inserts a new adverse event into the DB.
 * @param {AdverseEvent} params the adverse event.
 * @returns {Promise.<Object>}
 */
const createAdverseEvent = params => AdverseEvents.create(params);

/**
 * Updates the specified adverse event using the provided new params.
 * @param {Number} id the AdverseEvent identifier.
 * @param {AdverseEvent} params the adverse event.
 * @return {Promise.<Integer>}
 */
const updateAdverseEvent = (id, params) => AdverseEvents.update(params, {
  where: {
    id,
  },
});

/**
 * Deletes the specified adverse event from the DB.
 * @param {Number} id the AdverseEvent identifier.
 * @param {AdverseEvent} params the adverse event.
 * @return {Promise.<Integer>}
 */
const deleteAdverseEvent = id => AdverseEvents.destroy({
  where: {
    id,
  },
});

module.exports = {
  listAdverseEvents,
  getAdverseEventById,
  createAdverseEvent,
  updateAdverseEvent,
  deleteAdverseEvent,
};
