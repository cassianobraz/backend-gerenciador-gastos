/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateTransactionService from '@modules/transaction/services/CreateTransactionService';
import ListTransactions from '@modules/transaction/services/ListTransactions';
import ListPayments from '@modules/transaction/services/ListPayments';
import ListCosts from '@modules/transaction/services/ListCosts';

export default class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { date, type, value, cost_id, payment_id } = request.body;
    const user_id = request.user.id;

    const createTransaction = container.resolve(CreateTransactionService);

    const transaction = await createTransaction.execute({
      date,
      user_id,
      type,
      value,
      cost_id,
      payment_id,
    });

    return response.json(transaction);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listTransactions = container.resolve(ListTransactions);

    const transaction = await listTransactions.execute({ user_id });

    return response.json(transaction);
  }

  public async indexCosts(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const user_id = request.user.id;
    const listCosts = container.resolve(ListCosts);

    const payments = await listCosts.execute({ user_id });

    return response.json(payments);
  }

  public async indexPayments(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const user_id = request.user.id;
    const listCosts = container.resolve(ListPayments);

    const payments = await listCosts.execute({ user_id });

    return response.json(payments);
  }
}
