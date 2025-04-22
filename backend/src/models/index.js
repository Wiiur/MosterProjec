const sequelize = require("../config/database");
const User = require("./User");
const Product = require("./Product");


const syncDB = async () => {
    try {
        await sequelize.sync({ alter: true});
        console.log("Banco de dados sicronizado com sucesso!");
    } catch (error) {
        console.error("Erro ao sicronizar banco de dados:", error);
    }
};

module.exports = { User, Product, syncDB};