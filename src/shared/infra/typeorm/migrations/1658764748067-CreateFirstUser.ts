import { MigrationInterface, QueryRunner } from "typeorm";
import { hash } from 'bcryptjs';

export class CreateFirstUser1658764748067 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const senha = await hash('admin', 8);
        await queryRunner.manager.insert("usuarios", {
            nome: "ADMINISTRADOR",
            primeiroNome: "ADMIN",
            senha: senha,
            admin: true,
            ativo: true,
            email: "washington.ribeiro@paneas.com",
            telefone: "+5584992140775",
            sobre: "",
            avatar: "",
        });
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.delete("usuarios", {
            email: "washington.ribeiro@paneas.com",
        });
    }
}
