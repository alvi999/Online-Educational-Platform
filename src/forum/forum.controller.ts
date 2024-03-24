import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UseGuards } from '@nestjs/common';
import { ForumService } from './forum.service';
import { CreateForumDto } from './dto/create-forum.dto';
import { UpdateForumDto } from './dto/update-forum.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('forum')
export class ForumController {
  constructor(private readonly forumService: ForumService) {}

  @Post('create')
  create(@Body() createForumDto: CreateForumDto) {
    return this.forumService.create(createForumDto);
  }

  @Get()
  findAll() {
    return this.forumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.forumService.findOne(+id);
  }
  

  @Patch('Instructor/:id')
  @UseGuards(AuthGuard)
  async update(
  @Param('id') id: number,
  @Body() UpdateForumDto: UpdateForumDto,
) {
  await this.forumService.update(id, UpdateForumDto);
  return { message: 'Answer sent successfully' };
}



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.forumService.remove(+id);
  }
}
