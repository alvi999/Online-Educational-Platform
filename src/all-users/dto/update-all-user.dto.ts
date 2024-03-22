import { PartialType } from '@nestjs/mapped-types';
import { CreateAllUserDto } from './create-all-user.dto';

export class UpdateAllUserDto extends PartialType(CreateAllUserDto) {}
