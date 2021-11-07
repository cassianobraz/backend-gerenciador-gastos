import { inject, injectable } from 'tsyringe';
import ITransactionRepository from '@modules/transaction/repositories/ITransactionRepository';
import Transaction from '@modules/transaction/infra/typeorm/entities/Transaction';

interface IRequest {
  user_id: string;
}

@injectable()
class ListProvidersService {
  constructor(
    @inject('TransactionRepository')
    private transactionRepository: ITransactionRepository,
  ) {}

  public async execute({
    user_id,
  }: IRequest): Promise<Transaction[] | undefined> {
    const users = await this.transactionRepository.findByMonth(user_id);

    return users;
  }
}

export default ListProvidersService;
