import {MigrationInterface, QueryRunner} from "typeorm";

export class ContribuicaoRenameFormaPagamento1660085877582 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE contribuicoes RENAME COLUMN forma_pagamento_ TO forma_pagamento`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE contribuicoes RENAME COLUMN forma_pagamento TO forma_pagamento_`);
    }

}
