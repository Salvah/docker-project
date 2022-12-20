const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;

const { Sequelize, QueryTypes } = require("sequelize");

const host = process.env.MYSQL_HOST || "docker";
const user = process.env.MYSQL_USER || "root";
const dbname = process.env.MYSQL_DATABASE || "docker";

const sequelize = new Sequelize(dbname, user, "salvah", {
  host,
  dialect: "mysql",
});

app.get("/", async (req, res) => {
  const users = await sequelize.query("SELECT * FROM `users`", {
    type: QueryTypes.SELECT,
  });
  console.log(users);
  res.send("Hello World!");
});

app.post("/", async (req, res) => {
  const body = req.body;
  console.log(body);
  res.send("Teste");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
