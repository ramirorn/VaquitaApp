import express, { type Request, type Response } from "express";
import "dotenv/config";

// Rutas
import router from "./routes/index.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`)
})