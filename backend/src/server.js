const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/Routes");
require("dotenv").config({ path: "../../.env" }); // porque server.js está em backend/src/

app.use(cors());
app.use(express.json());

app.use("/api", userRoutes); // http://localhost:3001/api/meus-dados

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
