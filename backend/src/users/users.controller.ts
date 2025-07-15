import {
  Body,
  Controller,
  Post,
  Get,
  Req,
  UseGuards,
  Inject,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UsersService } from './users.service'; // Import the service

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService, // Inject UsersService
  ) {}

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    return this.usersService.signup(createUserDto); // Signup logic
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.usersService.login(loginDto); // Login logic
  }

  @Get('me')
  @UseGuards(AuthGuard('jwt')) // Specify strategy (e.g. 'jwt')
  async me(@Req() req: Request) {
    return req.user; // AuthGuard will attach user to the request
  }
}
