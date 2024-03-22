import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AllUsersService } from './all-users.service';
import { CreateAllUserDto } from './dto/create-all-user.dto';
import { UpdateAllUserDto } from './dto/update-all-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('all-users')
export class AllUsersController {
  constructor(private readonly allUsersService: AllUsersService) {}

  @Post()
  create(@Body() createAllUserDto: CreateAllUserDto) {
    return this.allUsersService.create(createAllUserDto);
  }

  @Post('signup')
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.CREATED)
  async signUp(@Body() createAllUserDto: CreateAllUserDto) {
    return await this.allUsersService.create(createAllUserDto);
  }

  @Get('all-users')
  findAll() {
    return this.allUsersService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.allUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAllUserDto: UpdateAllUserDto) {
    return this.allUsersService.update(+id, updateAllUserDto);
  }
  @Get('Admin/applyinstructor/all')
  ApplyInstructor() { 
  return this.allUsersService.ApplyInstructor();
}

@Patch('Admin/applyinstructor/:id')
  approveApplyInstructor(@Param('id') id: number) { 
  return this.allUsersService.approveApplyInstructor(id);
}
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.allUsersService.remove(+id);
  }
}
