const { Sequelize } = require("sequelize");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../../.env") });

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false, 
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Conectado ao banco de dados!");
    } catch (error) {
        console.log("Erro ao conectar ao banco:", error);
    }
})();

console.log("ENV USER:", process.env.DB_USER);
module.exports = sequelize;
