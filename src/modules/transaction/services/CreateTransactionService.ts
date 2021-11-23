import { inject, injectable } from 'tsyringe';
import Appointment from '../infra/typeorm/entities/Transaction';
import ITransactionRepository from '../repositories/ITransactionRepository';

interface IRequest {
  type: string;
  value: number;
  user_id: string;
  date: Date;
  cost_id: string;
  payment_id: string;
}

@injectable()
class CreateAppointmentService {
  constructor(
    @inject('TransactionRepository')
    private transactionRepository: ITransactionRepository,
  ) {}

  public async execute({
    date,
    user_id,
    type,
    value,
    cost_id,
    payment_id,
  }: IRequest): Promise<Appointment> {
    const transaction = await this.transactionRepository.create({
      type,
      value,
      user_id,
      date,
      cost_id,
      payment_id,
    });

    return transaction;
  }
}

export default CreateAppointmentService;
