import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1658695943488 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usuarios",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "primeiroNome",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "senha",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "admin",
                        type: "boolean",
                        isNullable: true,
                        default: false,
                    },
                    {
                        name: "ativo",
                        type: "boolean",
                        isNullable: true,
                        default: false,
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "telefone",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "sobre",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "avatar",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "moldura",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "pontuacao",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timeStamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuarios");
    }
}
