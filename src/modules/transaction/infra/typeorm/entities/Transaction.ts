import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import Payment from '@modules/payment_type/infra/typeorm/entities/Payment';
import Cost from '@modules/cost_type/infra/typeorm/entities/Cost';

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('timestamp with time zone')
  date: Date;

  @Column()
  value: number;

  @Column()
  type: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  payment_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'payment_id' })
  payment: Payment;

  @Column()
  cost_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'cost_id' })
  cost: Cost;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Transaction;
