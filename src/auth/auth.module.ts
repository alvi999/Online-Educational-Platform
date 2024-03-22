import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AllUsersModule } from 'src/all-users/all-users.module';
@Module({
  imports:[AllUsersModule,JwtModule.register({ secret:'secret101',global: true,signOptions: { expiresIn: '30m' },})],
  controllers: [AuthController],
  providers: [AuthService],
  
})
export class AuthModule {}
