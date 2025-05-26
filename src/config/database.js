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
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo'
  },
  timezone: 'America/Sao_Paulo'
};
