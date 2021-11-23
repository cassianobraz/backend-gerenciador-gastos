import { inject, injectable } from 'tsyringe';
import ITransactionRepository from '@modules/transaction/repositories/ITransactionRepository';

interface IRequest {
  user_id: string;
}

interface IPayment {
  cost: string;
  quantity: string;
}

@injectable()
class ListPaymentService {
  constructor(
    @inject('TransactionRepository')
    private transactionRepository: ITransactionRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<IPayment[] | undefined> {
    const payments = await this.transactionRepository.findPayments(user_id);

    return payments;
  }
}

export default ListPaymentService;
