import { getRepository } from "typeorm";
import Usuario from "@modules/usuarios/infra/typeorm/entities/Usuario";
import { injectable, inject } from "tsyringe";
import { compare } from "bcryptjs";

import authConfig from "@config/auth";

import { sign } from "jsonwebtoken";

import AppError from "@shared/errors/AppError";

@injectable()
class LoginService {
    constructor() {}

    async execute(data: { email: string; senha: string }): Promise<any> {
        const usuariosRepository = getRepository(Usuario);

        const user = await usuariosRepository.findOne({
            where: {
                email: data.email,
            },
        });

        if (!user) {
            throw new AppError("Usuário não encontrado", 404);
        }

        const passwordmatch = await compare(data.senha, user.senha);

        if (!passwordmatch) {
            throw new AppError("Usuário ou senha inválidos.", 401);
        }

        if (!user?.ativo) {
            throw new AppError("Aguarde até que a diretoria libere o seu acesso", 404);
        }

        const token = sign(
            {
                id: user.id,
                nome: user.nome,
                avatar: user.avatar,
                moldura: user.moldura,
                admin: user.admin,
            },
            authConfig.jwt.secret,
            { subject: "" + user?.id, expiresIn: authConfig.jwt.expiresIn },
        );

        return { token };
    }
}

export default LoginService;
