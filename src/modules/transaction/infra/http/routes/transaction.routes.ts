import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { celebrate, Segments, Joi } from 'celebrate';
import TransactionController from '../controllers/TransactionController';

const transactionRouter = Router();

transactionRouter.use(ensureAuthenticated);

const transactionController = new TransactionController();

transactionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      type: Joi.string().required(),
      date: Joi.date().required(),
      value: Joi.number().required(),
    },
  }),
  transactionController.create,
);

transactionRouter.get('/', transactionController.index);

export default transactionRouter;
