import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import PaymentrController from '../controllers/CostController';

const costRouter = Router();

costRouter.use(ensureAuthenticated);

const paymentController = new PaymentrController();

costRouter.post('/', paymentController.create);

costRouter.get('/', paymentController.index);

export default costRouter;
