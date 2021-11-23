import { inject, injectable } from 'tsyringe';
import IPaymentRepository from '@modules/payment_type/repositories/IPaymentRepository';
import Payment from '@modules/payment_type/infra/typeorm/entities/Payment';

@injectable()
class ListProvidersService {
  constructor(
    @inject('PaymentRepository')
    private paymentProvider: IPaymentRepository,
  ) {}

  public async execute(): Promise<Payment[] | undefined> {
    const payments = await this.paymentProvider.find();

    return payments;
  }
}

export default ListProvidersService;
