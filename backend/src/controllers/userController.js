const { User } = require("../models");
const { auth } = require("../services/firebaseAuth");

const registerUser = async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const user = await User.create({ name, email, role });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Erro ao registrar usuário" });
  }
};

const loginUser = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Token não fornecido" });

    const decoded = await auth.verifyIdToken(token);
    const user = await User.findOne({ where: { email: decoded.email } });

    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });

    res.json(user);
  } catch (error) {
    res.status(401).json({ error: "Erro na autenticação" });
  }
};

const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

module.exports = { registerUser, loginUser, getUsers };
