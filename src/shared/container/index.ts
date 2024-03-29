import { container } from 'tsyringe';

import '@modules/users/providers';

import ITransactionRepository from '@modules/transaction/repositories/ITransactionRepository';
import TransactionRepository from '@modules/transaction/infra/typeorm/repositories/TransactionRepository';

import IUserRepository from '@modules/users/repositories/IUserRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UsersTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import IPaymentRepository from '@modules/payment_type/repositories/IPaymentRepository';
import PaymentRepository from '@modules/payment_type/infra/typeorm/repositories/PaymentRepository';

import ICostRepository from '@modules/cost_type/repositories/ICostRepository';
import CostRepository from '@modules/cost_type/infra/typeorm/repositories/CostRepository';

container.registerSingleton<ITransactionRepository>(
  'TransactionRepository',
  TransactionRepository,
);

container.registerSingleton<ICostRepository>('CostRepository', CostRepository);

container.registerSingleton<IPaymentRepository>(
  'PaymentRepository',
  PaymentRepository,
);

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UsersTokensRepository,
);
