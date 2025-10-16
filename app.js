const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Importar rutas
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");

// Usar rutas
app.use("/users", usersRouter);
app.use("/cards", cardsRouter);

// Ruta para cualquier otra dirección → 404 personalizado
app.use((req, res) => {
  res.status(404).json({ message: "Recurso solicitado no encontrado" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
