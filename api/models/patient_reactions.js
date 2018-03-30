/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patientReactions', {
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'patients',
        key: 'id'
      },
      field: 'patient_id'
    },
    reactionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'reactions',
        key: 'id'
      },
      field: 'reaction_id'
    }
  }, {
    tableName: 'patient_reactions',
    timestamps: false
  });
};
