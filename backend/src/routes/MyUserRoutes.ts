import express from "express";
import MyUserController from "../controllers/MyUserController";

const router = express.Router();

//api//

router.post("/", MyUserController.createCurrentUser);

export default router;
