const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    loggin: false,
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Conectado ao banco de dados!");
    } catch (error) {
        console.log("Erro ao conectar ao banco:", error);
    }
})();

module.exports = sequelize;