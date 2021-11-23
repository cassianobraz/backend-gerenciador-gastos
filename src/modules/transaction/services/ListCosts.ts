import { inject, injectable } from 'tsyringe';
import ITransactionRepository from '@modules/transaction/repositories/ITransactionRepository';

interface IRequest {
  user_id: string;
}

interface ICost {
  cost: string;
  quantity: string;
}

@injectable()
class ListPaymentService {
  constructor(
    @inject('TransactionRepository')
    private transactionRepository: ITransactionRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<ICost[] | undefined> {
    const payments = await this.transactionRepository.findCosts(user_id);

    return payments;
  }
}

export default ListPaymentService;
