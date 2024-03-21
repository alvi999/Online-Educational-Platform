import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApplyinstructorService } from './applyinstructor.service';
import { CreateApplyinstructorDto } from './dto/create-applyinstructor.dto';
import { UpdateApplyinstructorDto } from './dto/update-applyinstructor.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('applyinstructor')

export class ApplyinstructorController {
  constructor(private readonly applyinstructorService: ApplyinstructorService) { }


  @Post('create')
  create(@Body() createApplyinstructorDto: CreateApplyinstructorDto) {
    return this.applyinstructorService.create(createApplyinstructorDto);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file')) 
  uploadFile(@UploadedFile() file) {
    console.log(file);
    return { message: "File Upload", file: file.filename };
  }

  @Get()
  async findAll() {
    return await this.applyinstructorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.applyinstructorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplyinstructorDto: UpdateApplyinstructorDto) {
    return this.applyinstructorService.update(+id, updateApplyinstructorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applyinstructorService.remove(+id);
  }
}
