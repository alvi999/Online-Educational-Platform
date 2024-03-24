import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewcourseService } from './newcourse.service';
import { CreateNewcourseDto } from './dto/create-newcourse.dto';
import { UpdateNewcourseDto } from './dto/update-newcourse.dto';

@Controller('newcourse')
export class NewcourseController {
  constructor(private readonly newcourseService: NewcourseService) {}

  @Post('create')
  create(@Body() createNewcourseDto: CreateNewcourseDto) {
    return this.newcourseService.create(createNewcourseDto);
  }

  @Get()
  findAll() {
    return this.newcourseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newcourseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewcourseDto: UpdateNewcourseDto) {
    return this.newcourseService.update(+id, updateNewcourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newcourseService.remove(+id);
  }
}
