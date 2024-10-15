import { IsNotEmpty, IsOptional } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class CreateFavoriteDto {
  @IsNotEmpty()
  city: string;
  @IsOptional()
  user: User;
}
