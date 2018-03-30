/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patients', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    patientAge: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'patient_age'
    },
    patientSex: {
      type: DataTypes.CHAR,
      allowNull: false,
      field: 'patient_sex'
    },
    adverseEventId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'adverse_event_id'
    }
  }, {
    tableName: 'patients',
    timestamps: false
  });
};
