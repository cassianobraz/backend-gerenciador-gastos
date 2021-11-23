import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import TransactionController from '../controllers/TransactionController';

const transactionRouter = Router();

transactionRouter.use(ensureAuthenticated);

const transactionController = new TransactionController();

transactionRouter.post('/', transactionController.create);

transactionRouter.get('/', transactionController.index);

transactionRouter.get('/costs', transactionController.indexCosts);
transactionRouter.get('/payments', transactionController.indexPayments);

export default transactionRouter;
