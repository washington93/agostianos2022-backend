import { injectable, inject } from "tsyringe";
import { hash } from 'bcryptjs';

import IUsuariosRepository from "@modules/usuarios/repositories/IUsuariosRepository";
import ICadastrarUsuarioDTO from "@modules/usuarios/dtos/ICadastrarUsuarioDTO";

import AppError from "@shared/errors/AppError";

@injectable()
class CadastrarUsuarioService {
    constructor(
        @inject("UsuariosRepository")
        private usuariosRepository: IUsuariosRepository
    ) {}

    async execute(data: ICadastrarUsuarioDTO): Promise<any> {
        // TODO - checar se usuario ja existe
        const userExists = await this.usuariosRepository.findbyEmail(
            data.email
        );

        if (userExists?.length > 0) {
            throw new AppError("Usuario já existe", 409);
        }

        data.nome = data.nome.toUpperCase();
        data.email = data.email.toLowerCase();
        data.primeiroNome = data.nome.split(" ")[0];
        data.senha = await hash(data.senha, 8);

        const usuario = await this.usuariosRepository.create(data);
        return usuario;
    }
}

export default CadastrarUsuarioService;
