module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'escola',
  port: 3306,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'Z', // Use UTC para evitar problemas
    dateStrings: true, // Garante que datas sejam retornadas como strings
    typeCast: true, // Permite manipulação de tipos
  },
  timezone: '-03:00', // Define manualmente o timezone para São Paulo
};
