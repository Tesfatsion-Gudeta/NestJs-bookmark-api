import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  signup(dto: AuthDto) {
    console.log({ dto });
    return { msg: 'signed up' };
  }
  signin() {
    return { msg: 'signed in' };
  }
}
