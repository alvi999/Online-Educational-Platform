import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplyinstructorModule } from './applyinstructor/applyinstructor.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

import { AllUsersModule } from './all-users/all-users.module';
import { CoursereviewModule } from './coursereview/coursereview.module';
import { NewcourseModule } from './newcourse/newcourse.module';
import { ForumModule } from './forum/forum.module';
import  config  from 'ormconfig';

@Module({
  imports:[TypeOrmModule.forRoot(config),ApplyinstructorModule, AuthModule, AllUsersModule, AllUsersModule, CoursereviewModule, NewcourseModule, ForumModule ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

