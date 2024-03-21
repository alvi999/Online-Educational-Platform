import { Module } from '@nestjs/common';
import { ApplyinstructorService } from './applyinstructor.service';
import { ApplyinstructorController } from './applyinstructor.controller';
import { Applyinstructor } from 'src/entities/applyinstructor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Applyinstructor])],
  controllers: [ApplyinstructorController],
  providers: [ApplyinstructorService],
})
export class ApplyinstructorModule {}
