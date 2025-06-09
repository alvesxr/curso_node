module.exports = {
  development: {
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "escola",
    port: 3306,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    dialectOptions: {
      timezone: "Z",
      dateStrings: true,
      typeCast: true,
    },
    timezone: "-03:00",
  },
};
