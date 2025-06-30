import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';
import Aluno from '../models/Aluno.js';
import User from '../models/User.js';

const models = [Aluno, User];

// Usando apenas a configuração do ambiente development
const connection = new Sequelize(databaseConfig.development);

models.forEach((model) => model.init(connection));
