/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreatePaymentService from '@modules/payment_type/services/CreatePaymentService';
import ListPayments from '@modules/payment_type/services/ListPayments';

export default class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createPayment = container.resolve(CreatePaymentService);

    const payment = await createPayment.execute({
      name,
    });

    return response.json(payment);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listPayments = container.resolve(ListPayments);

    const payments = await listPayments.execute();

    return response.json(payments);
  }
}
