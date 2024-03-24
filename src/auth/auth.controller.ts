import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Request() req) {
   
    const user = await this.authService.login(req.body);
    if (user) {
      return { message: 'Login successful', user };
    } else {
      return { message: 'Invalid username or password' }; 
    }
  }
}
