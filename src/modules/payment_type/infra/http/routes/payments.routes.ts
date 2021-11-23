import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import PaymentrController from '../controllers/PaymentrController';

const paymentRouter = Router();

paymentRouter.use(ensureAuthenticated);

const paymentController = new PaymentrController();

paymentRouter.post('/', paymentController.create);

paymentRouter.get('/', paymentController.index);

export default paymentRouter;
