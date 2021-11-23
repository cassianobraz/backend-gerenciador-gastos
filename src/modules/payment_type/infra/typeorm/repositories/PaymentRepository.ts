import { getRepository, Repository } from 'typeorm';

import IPaymentRepository from '@modules/payment_type/repositories/IPaymentRepository';
import ICreateAppointmentDTO from '@modules/payment_type/dtos/ICreatePaymentDTO';
import Payment from '../entities/Payment';

class TransactionRepository implements IPaymentRepository {
  private ormRepository: Repository<Payment>;

  constructor() {
    this.ormRepository = getRepository(Payment);
  }

  public async find(): Promise<Payment[] | undefined> {
    const payments = this.ormRepository.find();

    return payments;
  }

  public async create({ name }: ICreateAppointmentDTO): Promise<Payment> {
    const appointment = this.ormRepository.create({
      name,
    });

    await this.ormRepository.save(appointment);

    return appointment;
  }
}

export default TransactionRepository;
