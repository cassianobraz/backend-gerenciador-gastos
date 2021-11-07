import { container } from 'tsyringe';

import '@modules/users/providers';

import ITransactionRepository from '@modules/transaction/repositories/ITransactionRepository';
import TransactionRepository from '@modules/transaction/infra/typeorm/repositories/TransactionRepository';

import IUserRepository from '@modules/users/repositories/IUserRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UsersTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

container.registerSingleton<ITransactionRepository>(
  'TransactionRepository',
  TransactionRepository,
);

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UsersTokensRepository,
);
