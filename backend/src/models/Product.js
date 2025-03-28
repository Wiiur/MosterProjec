const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define("Product", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    description: { type: DataTypes.TEXT },
    stock: { type: DataTypes.INTEGER, defaultValue: 0 },
    category: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING }, // URL da imagem
});

module.exports = Product;