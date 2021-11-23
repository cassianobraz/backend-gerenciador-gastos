import Payment from '../infra/typeorm/entities/Cost';
import ICreateTransactionDTO from '../dtos/ICreateCostDTO';

export default interface ICostRepository {
  find(): Promise<Payment[] | undefined>;
  create(data: ICreateTransactionDTO): Promise<Payment>;
}
