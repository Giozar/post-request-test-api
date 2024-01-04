import { Router } from "express";
import { postRequest } from "../controllers/postRequest.controller.js";

const postRequestRoutes = Router();


postRequestRoutes.post("/test", postRequest )

export default postRequestRoutes;