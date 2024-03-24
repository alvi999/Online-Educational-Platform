import { Module } from '@nestjs/common';
import { NewcourseService } from './newcourse.service';
import { NewcourseController } from './newcourse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Newcourse } from 'src/entities/newcourse.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Newcourse])],
  controllers: [NewcourseController],
  providers: [NewcourseService],
})
export class NewcourseModule {}
