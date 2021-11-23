import Transaction from '../infra/typeorm/entities/Transaction';
import ICreateTransactionDTO from '../dtos/ICreateTransactionDTO';

interface ICost {
  cost: string;
  quantity: string;
}

interface IPayment {
  cost: string;
  quantity: string;
}

export default interface IAppointmentsRepository {
  create(data: ICreateTransactionDTO): Promise<Transaction>;
  findCosts(user_id: string): Promise<ICost[]>;
  findPayments(user_id: string): Promise<IPayment[]>;
  findByMonth(user_id: string): Promise<Transaction[] | undefined>;
}
