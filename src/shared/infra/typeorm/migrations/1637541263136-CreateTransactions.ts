import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateTransaction1637541263136
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'transactions',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'type',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'value',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
            isNullable: false,
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'payment_id',
            type: 'uuid',
          },
          {
            name: 'cost_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'TransactionsUser',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
          },
          {
            name: 'TransactionPayments',
            columnNames: ['payment_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'payments',
          },
          {
            name: 'TransactionCosts',
            columnNames: ['cost_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'costs',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transactions');
  }
}
