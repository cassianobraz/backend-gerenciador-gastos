/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateTransactionService from '@modules/transaction/services/CreateTransactionService';
import ListTransactions from '@modules/transaction/services/ListTransactions';

export default class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { date, type, value } = request.body;
    const user_id = request.user.id;

    const createTransaction = container.resolve(CreateTransactionService);

    const transaction = await createTransaction.execute({
      date,
      user_id,
      type,
      value,
    });

    return response.json(transaction);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listTransactions = container.resolve(ListTransactions);

    const transaction = await listTransactions.execute({ user_id });

    return response.json(transaction);
  }
}
