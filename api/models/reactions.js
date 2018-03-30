/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reactions', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    meddraPrimaryTerm: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: 'meddra_primary_term'
    }
  }, {
    tableName: 'reactions',
    timestamps: false
  });
};
