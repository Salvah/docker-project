module.exports = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "mysql",
  logging: console.log,
  define: {
    timestamps: true,
    underscored: true,
  },
  timezone: "-03:00",
  benchmark: true,
};
