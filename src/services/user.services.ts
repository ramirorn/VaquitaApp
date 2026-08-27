import prisma from "../config/prisma.js";

export const createUserService = async (nombre: string, email: string, password: string) => {
    const nuevoUsuario = await prisma.usuario.create({
        data: { nombre, email, password }
    });

    return nuevoUsuario;
}