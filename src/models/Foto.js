//referente a tabela alunos
import Sequelize, { Model } from 'sequelize';
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
