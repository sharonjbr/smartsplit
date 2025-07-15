import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    signup(createUserDto: CreateUserDto) {
        throw new Error('Method not implemented.');
    }
    login(loginDto: LoginDto) {
        throw new Error('Method not implemented.');
    }
}
