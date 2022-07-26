import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateContribuicoes1658796457943 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "contribuicoes",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "valor",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "usuario_id",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "responsavel_id",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "forma_pagamento_",
                        type: "varchar",
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

        await queryRunner.createForeignKey(
            "contribuicoes",
            new TableForeignKey({
                name: "contribuicao_usuarios_usuario_id_foreign",
                columnNames: ["usuario_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "usuarios",
                onDelete: "SET NULL",
                onUpdate: "CASCADE",
            })
        );

        await queryRunner.createForeignKey(
            "contribuicoes",
            new TableForeignKey({
                name: "contribuicao_usuarios_responsavel_id_foreign",
                columnNames: ["responsavel_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "usuarios",
                onDelete: "SET NULL",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("contribuicoes", "contribuicao_usuarios_usuario_id_foreign");
        await queryRunner.dropForeignKey("contribuicoes", "contribuicao_usuarios_responsavel_id_foreign");
        await queryRunner.dropTable("contribuicoes");

    }

}
