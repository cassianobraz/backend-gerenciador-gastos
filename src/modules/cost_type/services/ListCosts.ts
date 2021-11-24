import { inject, injectable } from 'tsyringe';
import ICostRepository from '@modules/cost_type/repositories/ICostRepository';
import Payment from '@modules/payment_type/infra/typeorm/entities/Payment';

@injectable()
class ListProvidersService {
  constructor(
    @inject('CostRepository')
    private costProvider: ICostRepository,
  ) {}

  public async execute(): Promise<Payment[] | undefined> {
    const payments = await this.costProvider.find();

    return payments;
  }
}

export default ListProvidersService;
