import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

export interface AuthRequest extends Request {
    usuario?: string | jwt.JwtPayload;
}

export const verificarToken = (req: AuthRequest, res: Response, next: NextFunction): void => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({
            status: 'error',
            message: 'Acceso denegado. Token no proporcionado o formato inválido.',
        });
        return;
    }

    const token = authHeader.split(' ')[1] as string;

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.usuario = decoded;

        next();
    } catch (error) {
        res.status(401).json({
            status: 'error',
            message: 'Acceso denegado. Token inválido.',
        });
    }

}
