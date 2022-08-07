import { injectable, inject } from "tsyringe";

import Usuario from "@modules/usuarios/infra/typeorm/entities/Usuario";
import IUsuariosRepository from "@modules/usuarios/repositories/IUsuariosRepository";
import { decode } from "jsonwebtoken";

import AppError from "@shared/errors/AppError";

@injectable()
class BuscarDadosUsuarioService {
    constructor(
        @inject("UsuariosRepository")
        private usuariosRepository: IUsuariosRepository
    ) {}

    async execute(token: string): Promise<any> {
        // decode token with jsonwebtoken
        token = token.replace(/^Bearer\s/, "");
        var decodedToken: any = decode(token);

        const result = await this.usuariosRepository.findById(
            decodedToken?.id
        );

        return result;
    }
}

export default BuscarDadosUsuarioService;
