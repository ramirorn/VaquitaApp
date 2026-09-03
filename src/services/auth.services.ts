import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../config/prisma.js';

const JWT_SECRET = process.env.JWT_SECRET as string;

export const registerAuthService = async (nombre: string, email: string, passwordPlana: string) => {

    const usuarioExistente = await prisma.usuario.findUnique({ where: { email } });

    if (usuarioExistente) {
        throw new Error('El usuario ya existe');
    }

    const hashedPassword = await bcrypt.hash(passwordPlana, 10);

    const nuevoUsuario = await prisma.usuario.create({ data: { nombre, email, password: hashedPassword } });

    const { password, ...usuarioSinPassword } = nuevoUsuario;

    return usuarioSinPassword;
};

export const loginAuthService = async (email: string, passwordPlana: string) => {

    const usuario = await prisma.usuario.findUnique({ where: { email } });
    if (!usuario) {
        throw new Error('Credenciales inválidas');
    }

    const passwordCorrecta = await bcrypt.compare(passwordPlana, usuario.password);
    if (!passwordCorrecta) {
        throw new Error('Credenciales inválidas');
    }

    const token = jwt.sign(
        { id: usuario.id, email: usuario.email },
        JWT_SECRET,
        { expiresIn: '7d' }
    );

    const { password, ...usuarioSinPassword } = usuario;

    return {
        usuario: usuarioSinPassword,
        token
    };
};