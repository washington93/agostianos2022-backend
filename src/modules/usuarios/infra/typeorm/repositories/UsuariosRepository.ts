import { EntityRepository, getRepository, Repository } from "typeorm";

import Usuario from "@modules/usuarios/infra/typeorm/entities/Usuario";
import IUsuariosRepository from "@modules/usuarios/repositories/IUsuariosRepository";
import ICadastrarUsuarioDTO from "@modules/usuarios/dtos/ICadastrarUsuarioDTO";

@EntityRepository(Usuario)
class UsuariosRepository implements IUsuariosRepository {
    private ormRepository: Repository<Usuario>;

    constructor() {
        this.ormRepository = getRepository(Usuario);
    }

    async create(data: ICadastrarUsuarioDTO): Promise<Usuario> {
        const usuarioCreated = this.ormRepository.create(data);
        const newUsuario = await this.ormRepository.save(usuarioCreated);
        return newUsuario;
    }

    async findAll(): Promise<Usuario[]> {
        const result = await this.ormRepository.find();
        return result;
    }

    async findbyEmail(email: string): Promise<Usuario[]> {
        email = email.toLowerCase();
        const result = await this.ormRepository.find({
            where: {email},
        });
        return result;
    }

    updatePassword(id: string, password: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export default UsuariosRepository;
