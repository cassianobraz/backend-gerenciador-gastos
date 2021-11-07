import Transaction from '../infra/typeorm/entities/Transaction';
import ICreateTransactionDTO from '../dtos/ICreateTransactionDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateTransactionDTO): Promise<Transaction>;
  findByMonth(user_id: string): Promise<Transaction[] | undefined>;
}
