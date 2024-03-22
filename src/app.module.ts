import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplyinstructorModule } from './applyinstructor/applyinstructor.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

import { AllUsersModule } from './all-users/all-users.module';
import  config  from 'ormconfig';

@Module({
  imports:[TypeOrmModule.forRoot(config),ApplyinstructorModule, AuthModule, AllUsersModule, AllUsersModule ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
