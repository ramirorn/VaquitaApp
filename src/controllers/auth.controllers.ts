import type { Request, Response } from 'express';
import { registerAuthService, loginAuthService } from '../services/auth.services.js';

export const registerUser = async (req: Request, res: Response) => {

    const { nombre, email, password } = req.body;

    try {
        const nuevoUsuario = await registerAuthService(nombre, email, password);

        res.status(201).json({
            status: 'success',
            data: nuevoUsuario
        });

    } catch (error: any) {
        res.status(400).json({
            status: 'error',
            message: error.message
        });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const authData = await loginAuthService(email, password);

        res.status(200).json({
            status: 'success',
            data: authData
        });

    } catch (error: any) {
        res.status(401).json({
            status: 'error',
            message: error.message
        });
    }
};
