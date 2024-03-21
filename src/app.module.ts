import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplyinstructorModule } from './applyinstructor/applyinstructor.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import  config  from 'ormconfig';

@Module({
  imports:[TypeOrmModule.forRoot(config),ApplyinstructorModule ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
