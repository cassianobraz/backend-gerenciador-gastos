import { getRepository, Repository } from 'typeorm';

import ITransactionRepository from '@modules/transaction/repositories/ITransactionRepository';
import ICreateAppointmentDTO from '@modules/transaction/dtos/ICreateTransactionDTO';
import Transaction from '../entities/Transaction';

interface ICost {
  cost: string;
  quantity: string;
}

interface IPayment {
  cost: string;
  quantity: string;
}
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

  public async findCosts(user_id: string): Promise<ICost[]> {
    const costs = await this.ormRepository.query(
      `select c."name", count(c."name") from transactions t inner join costs c on c.id = t.cost_id inner join users u on t.user_id  = u.id where u.id = $1 and date >= date_trunc('month', CURRENT_DATE) group by c."name"`,
      [user_id],
    );

    return costs;
  }

  public async findPayments(user_id: string): Promise<IPayment[]> {
    const payments = await this.ormRepository.query(
      `select p."name", count(p."name") from transactions t inner join payments p on p.id = t.payment_id inner join users u on t.user_id  = u.id where u.id = $1 and date >= date_trunc('month', CURRENT_DATE) group by p."name"`,
      [user_id],
    );

    return payments;
  }

  public async create({
    user_id,
    date,
    type,
    value,
    cost_id,
    payment_id,
  }: ICreateAppointmentDTO): Promise<Transaction> {
    const appointment = this.ormRepository.create({
      user_id,
      date,
      value,
      type,
      cost_id,
      payment_id,
    });

    await this.ormRepository.save(appointment);

    return appointment;
  }
}

export default TransactionRepository;
