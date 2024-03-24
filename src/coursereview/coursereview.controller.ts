import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CoursereviewService } from './coursereview.service';
import { CreateCoursereviewDto } from './dto/create-coursereview.dto';
import { UpdateCoursereviewDto } from './dto/update-coursereview.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('coursereview')
export class CoursereviewController {
  constructor(private readonly coursereviewService: CoursereviewService) {}

  @Post('create')
 
  create(@Body() createCoursereviewDto: CreateCoursereviewDto) {
    return this.coursereviewService.create(createCoursereviewDto);
    
  }

  @Get()
  findAll() {
    return this.coursereviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursereviewService.findOne(+id);
  }

  @Patch(':id')
  async update(
  @Param('id') id: number,
  @Body() updateCoursereviewrDto: UpdateCoursereviewDto,
) {
  await this.coursereviewService.update(id, updateCoursereviewrDto);
  return { message: 'Review updated successfully' };
}

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursereviewService.remove(+id);
  }
}
