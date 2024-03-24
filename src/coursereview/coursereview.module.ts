import { Module } from '@nestjs/common';
import { CoursereviewService } from './coursereview.service';
import { CoursereviewController } from './coursereview.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coursereview } from 'src/entities/coursereview.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coursereview])],
  controllers: [CoursereviewController],
  providers: [CoursereviewService],
})
export class CoursereviewModule {}
