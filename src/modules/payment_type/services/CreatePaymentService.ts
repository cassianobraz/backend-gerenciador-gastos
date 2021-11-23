import { inject, injectable } from 'tsyringe';
import Appointment from '../infra/typeorm/entities/Payment';
import IPaymentRepository from '../repositories/IPaymentRepository';

interface IRequest {
  name: string;
}

@injectable()
class CreateAppointmentService {
  constructor(
    @inject('PaymentRepository')
    private paymentProvider: IPaymentRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<Appointment> {
    const transaction = await this.paymentProvider.create({ name });

    return transaction;
  }
}

export default CreateAppointmentService;
