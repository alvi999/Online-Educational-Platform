import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApplyinstructorService } from './applyinstructor.service';
import { CreateApplyinstructorDto } from './dto/create-applyinstructor.dto';
import { UpdateApplyinstructorDto } from './dto/update-applyinstructor.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from 'multer';

@Controller('applyinstructor')

export class ApplyinstructorController {
  constructor(private readonly applyinstructorService: ApplyinstructorService) { }


  @Post('create')
  create(@Body() createApplyinstructorDto: CreateApplyinstructorDto) {
    return this.applyinstructorService.create(createApplyinstructorDto);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: (req, file, cb) => {
        if (file.originalname.match(/\.(jpg|webp|png|jpeg)$/)) {
          cb(null, true);
        } else {
          cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
        }
      },
      limits: { fileSize: 300000 },
      storage: diskStorage({
        destination: './uploads/profilePic',
        filename: (req, file, cb) => {
          cb(null, Date.now() + file.originalname);
        },
      }),
    }),
  ) 
  uploadFile(@UploadedFile() file:Express.Multer.File) {
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
  async update(
  @Param('id') id: number,
  @Body() updateApplyinstructorDto: UpdateApplyinstructorDto,
) {
  await this.applyinstructorService.update(id, updateApplyinstructorDto);
  return { message: 'Instructor details updated successfully' };
}
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applyinstructorService.remove(+id);
  }
}
