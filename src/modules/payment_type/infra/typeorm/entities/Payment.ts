import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('payments')
class Payments {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}

export default Payments;
