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
  @UseGuards(AuthGuard)
  ApplyInstructor() { 
  return this.allUsersService.ApplyInstructor();
  } 
  @Get('Admin/coursereview/all')
  Coursereview() { 
  return this.allUsersService.Coursereview();
  } 
  @Get('Admin/newcourse/all')
  Newcourse() { 
  return this.allUsersService.Newcourse();
  } 

  @Get('Instructor/forum/all')
  forum() { 
  return this.allUsersService.Forum();
  }

@Patch('Admin/applyinstructor/:id')
  approveApplyInstructor(@Param('id') id: number) { 
  return this.allUsersService.approveApplyInstructor(id);
}

@Patch('Admin/newcourse/:id')
  approveNewcourse(@Param('id') id: number) { 
  return this.allUsersService.approveNewcourse(id);
}


  @Delete('Admin/coursereview/:id')
  removecoursereview(@Param('id') id: string) {
    return this.allUsersService.removecoursereview(+id);
  }

  @Delete('Admin/newcourse/:email')
  removenewcourse(@Param('email') email: string) {
    return this.allUsersService.removenewcourse(email);
  }
}
