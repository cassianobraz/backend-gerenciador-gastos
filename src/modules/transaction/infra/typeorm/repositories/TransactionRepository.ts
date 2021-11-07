import { getRepository, Repository } from 'typeorm';

import ITransactionRepository from '@modules/transaction/repositories/ITransactionRepository';
import ICreateAppointmentDTO from '@modules/transaction/dtos/ICreateTransactionDTO';
import Transaction from '../entities/Transaction';

class TransactionRepository implements ITransactionRepository {
  private ormRepository: Repository<Transaction>;

  constructor() {
    this.ormRepository = getRepository(Transaction);
  }

  public async findByMonth(
    user_id: string,
  ): Promise<Transaction[] | undefined> {
    const transaction = await this.ormRepository.query(
      `select t.id, t."type", t.value, t."date", t.created_at, t.updated_at from transactions t inner join users u ON u.id = t.user_id where t.user_id = $1 and date >= date_trunc('month', CURRENT_DATE)`,
      [user_id],
    );

    return transaction;
  }

  public async create({
    user_id,
    date,
    type,
    value,
  }: ICreateAppointmentDTO): Promise<Transaction> {
    const appointment = this.ormRepository.create({
      user_id,
      date,
      value,
      type,
    });

    await this.ormRepository.save(appointment);

    return appointment;
  }
}

export default TransactionRepository;
