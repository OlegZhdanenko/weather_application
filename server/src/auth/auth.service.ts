import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as argon from 'argon2';
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
    const passwordIsMatch = await argon.verify(user.password, password);
    console.log({ passwordIsMatch });

    if (user && passwordIsMatch) {
      return user;
    }
    throw new BadRequestException('login or password are incorrect');
  }
  async login(user: IUser) {
    const { name, id, email } = user;
    return {
      name,
      id,
      email,
      access_token: this.jwtService.sign({ id: user.id, email: user.email }),
    };
  }
  async logout(user: IUser) {
    const { name } = user;
    return {
      name,
      access_token: null,
    };
  }
}
