import { Router } from 'express';
import transactionRouter from '@modules/transaction/infra/http/routes/transaction.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import paymentsRouter from '@modules/payment_type/infra/http/routes/payments.routes';
import costsRouter from '@modules/cost_type/infra/http/routes/cost.routes';

const routes = Router();

routes.use('/transaction', transactionRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/profile', profileRouter);
routes.use('/payment', paymentsRouter);
routes.use('/costs', costsRouter);

export default routes;
