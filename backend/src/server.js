const app = require("./app");
const { syncDB } = require("./models");

const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
  await syncDB();
  console.log(`Servidor rodando na porta ${PORT}`);
});
