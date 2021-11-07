import { inject, injectable } from 'tsyringe';
import Appointment from '../infra/typeorm/entities/Transaction';
import ITransactionRepository from '../repositories/ITransactionRepository';

interface IRequest {
  type: string;
  value: number;
  user_id: string;
  date: Date;
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
  }: IRequest): Promise<Appointment> {
    const transaction = await this.transactionRepository.create({
      type,
      value,
      user_id,
      date,
    });

    return transaction;
  }
}

export default CreateAppointmentService;
