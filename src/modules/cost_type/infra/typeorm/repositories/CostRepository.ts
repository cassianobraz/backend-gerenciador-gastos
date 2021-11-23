import { getRepository, Repository } from 'typeorm';
import IPaymentRepository from '@modules/cost_type/repositories/ICostRepository';
import ICreateAppointmentDTO from '@modules/cost_type/dtos/ICreateCostDTO';
import Payment from '../entities/Cost';

class CostRepository implements IPaymentRepository {
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

export default CostRepository;
