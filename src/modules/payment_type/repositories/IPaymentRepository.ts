import Payment from '../infra/typeorm/entities/Payment';
import ICreateTransactionDTO from '../dtos/ICreatePaymentDTO';

export default interface IAppointmentsRepository {
  find(): Promise<Payment[] | undefined>;
  create(data: ICreateTransactionDTO): Promise<Payment>;
}
