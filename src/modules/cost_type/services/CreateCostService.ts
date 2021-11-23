import { inject, injectable } from 'tsyringe';
import Appointment from '../infra/typeorm/entities/Cost';
import ICostRepository from '../repositories/ICostRepository';

interface IRequest {
  name: string;
}

@injectable()
class CreateAppointmentService {
  constructor(
    @inject('CostRepository')
    private costProvider: ICostRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<Appointment> {
    const transaction = await this.costProvider.create({ name });

    return transaction;
  }
}

export default CreateAppointmentService;
