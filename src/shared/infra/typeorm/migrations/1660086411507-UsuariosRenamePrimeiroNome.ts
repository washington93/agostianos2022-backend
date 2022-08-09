import { MigrationInterface, QueryRunner } from "typeorm";

export class UsuariosRenamePrimeiroNome1660086411507
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE usuarios RENAME COLUMN primeiroNome TO primeiro_nome`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE usuarios RENAME COLUMN primeiro_nome TO primeiroNome`
        );
    }
}
