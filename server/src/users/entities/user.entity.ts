import { Favorite } from 'src/favorites/entities/favorite.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;

  @Column()
  password: string;
  @OneToMany(() => Favorite, (favorite) => favorite.user, {
    onDelete: 'CASCADE',
  })
  favorites: Favorite[];
  @CreateDateColumn()
  createdAt: Date;
}
