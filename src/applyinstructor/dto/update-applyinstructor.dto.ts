import { PartialType } from '@nestjs/mapped-types';
import { CreateApplyinstructorDto } from './create-applyinstructor.dto';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdateApplyinstructorDto extends PartialType(CreateApplyinstructorDto) {
   id:number;
    phone:number;
  
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsEmail()
    email: string;
  
  
}
