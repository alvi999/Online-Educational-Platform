import { Module } from '@nestjs/common';
import { AllUsersService } from './all-users.service';
import { AllUsersController } from './all-users.controller';
import { AllUsers } from 'src/entities/all-user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Applyinstructor } from 'src/entities/applyinstructor.entity';
import { Coursereview } from 'src/entities/coursereview.entity';
import { Newcourse } from 'src/entities/newcourse.entity';
import { Forum } from 'src/entities/forum.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AllUsers,Applyinstructor,Coursereview,Newcourse,Forum])],
  controllers: [AllUsersController],
  providers: [AllUsersService],
  exports: [AllUsersService],
})
export class AllUsersModule {}
