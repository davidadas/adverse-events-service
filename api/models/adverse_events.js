/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adverseEvents', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    safetyReportId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'safety_report_id'
    },
    receiveDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'receive_date'
    },
    receiptDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'receipt_date'
    },
    companyNumb: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'company_numb'
    }
  }, {
    tableName: 'adverse_events',
    timestamps: false
  });
};
