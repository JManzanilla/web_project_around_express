const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Middleware para parsear JSON y datos urlencoded (necesario para req.body en POST)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conectar a MongoDB
mongoose
  .connect("mongodb://localhost:27017/aroundb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((error) => {
    console.error("Error de conexión a MongoDB:", error);
  });

// Importar rutas
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");

// Middleware para pruebas: añadir un objeto user a cada petición
// En producción esto lo ofrece la capa de autenticación
app.use((req, res, next) => {
  // _id debe ser un ObjectId válido (24 hex chars). Ajusta según tu usuario en BD.
  // ID de prueba proporcionado por el desarrollador
  req.user = { _id: "5d8b8592978f8bd833ca8133" };
  next();
});

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
