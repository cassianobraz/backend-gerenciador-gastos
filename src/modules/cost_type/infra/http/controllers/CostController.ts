/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCostService from '@modules/cost_type/services/CreateCostService';
import ListCosts from '@modules/cost_type/services/ListCosts';

export default class CostController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createCost = container.resolve(CreateCostService);

    const payment = await createCost.execute({
      name,
    });

    return response.json(payment);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listCosts = container.resolve(ListCosts);

    const payments = await listCosts.execute();

    return response.json(payments);
  }
}
