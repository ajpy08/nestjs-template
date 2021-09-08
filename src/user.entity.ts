import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('users') // this is table name
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column({ default: true })
  isActive: boolean;
}
