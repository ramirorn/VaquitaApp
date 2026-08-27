import { Router } from "express";
import { createNewUser } from "../controllers/user.controllers.js";

const userRouter = Router();

userRouter.post("/users", createNewUser)

export default userRouter;