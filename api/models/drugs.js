/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('drugs', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    medicinalProduct: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: 'medicinal_product'
    },
    drugIndication: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'drug_indication'
    },
    drugDosageText: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'drug_dosage_text'
    },
    drugAuthorizationNumb: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'drug_authorization_numb'
    }
  }, {
    tableName: 'drugs',
    timestamps: false
  });
};
