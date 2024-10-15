import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Favorite {
  @PrimaryGeneratedColumn({ name: 'cities_id' })
  id: number;
  @Column()
  city: string;
  @ManyToOne(() => User, (user) => user.favorites)
  @JoinColumn({ name: 'user_id' })
  user: User;
  @CreateDateColumn()
  createdAt: Date;
}
