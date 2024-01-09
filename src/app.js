import express from "express"
import cors from "cors"
import { clientPort } from "../config.js";
import postRequestRoutes from "./routes/postRequest.routes.js";
import morgan from "morgan"
const app = express();

// Cors
app.use(cors({
    origin: clientPort,
    credentials: true,
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowedHeaders: 'Content-Type, Authorization, access-control-allow-origin',
}));
// Config
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use(postRequestRoutes);

// 404
app.use((req, res, next) => {
    return res.status(404).json({
        message: 'endpoint not found',
    })
})

export default app;