import type { Request, Response } from "express";
import { createUserService } from "../services/user.services.js";

export const createNewUser = async (req: Request, res: Response) => {
    const { nombre, email, password } = req.body;

    try {
        const usuario = await createUserService(nombre, email, password);
        res.status(201).json(usuario);
    } catch (error: any) {
        res.status(500).json({
            error: error.message,
        })
        console.log(error)
    }
}