//referente a tabela alunos
import Sequelize, { Model } from 'sequelize';
import app from '../config/app.js';
export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        original_name: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "O campo não pode ser vazio",
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "O campo não pode ser vazio",
            },
          },
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${app.url}/images/${this.getDataValue('filename')}`;
          },
        },
      },
      {
        sequelize,
        tableName: "fotos",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id'});
  }
}
