import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/types/types';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string) {
    const user = await this.usersService.findOne(email);
    const passwordIsMatch = await bcrypt.compare(user.password, password);
    if (user && passwordIsMatch) {
      return user;
    }
    throw new BadRequestException('User or password are incorrect');
  }
  async login(user: IUser) {
    const { id, email } = user;
    return {
      id,
      email,
      access_token: this.jwtService.sign({ id: user.id, email: user.email }),
    };
  }
}