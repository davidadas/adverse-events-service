/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patientDrugs', {
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'patients',
        key: 'id'
      },
      field: 'patient_id'
    },
    drugId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'drugs',
        key: 'id'
      },
      field: 'drug_id'
    }
  }, {
    tableName: 'patient_drugs',
    timestamps: false
  });
};
