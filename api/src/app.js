require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

require("./database");
const routes = require("./routes");

const app = express();

// CORS personalizado
const corsOptions = {
  origin: process.env.FRONTEND_URL || "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

app.use(express.json({ limit: "50mb" }));
app.use(routes);

// Arquivos estáticos
app.use(
  "/uploads",
  express.static(path.resolve(__dirname, "..", "public", "uploads"))
);

// Middleware global de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    error: true,
    message: err.message || "Internal server error",
  });
});

module.exports = app;
