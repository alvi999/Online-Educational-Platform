import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCoursereviewDto } from './dto/create-coursereview.dto';
import { UpdateCoursereviewDto } from './dto/update-coursereview.dto';
import { Coursereview } from 'src/entities/coursereview.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CoursereviewService {
  constructor(
    @InjectRepository(Coursereview) private readonly coursereviewRepo: Repository<Coursereview>,
    ) {}

   async create(createCoursereviewDto: CreateCoursereviewDto) {
    const coursereview = await this.coursereviewRepo.create(createCoursereviewDto);
    return await this.coursereviewRepo.save(coursereview);
  }
  findAll() {
    return `This action returns all coursereview`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coursereview`;
  }

  async update(id: number, updateCoursereviewDto: UpdateCoursereviewDto): Promise<void> {
    const coursereview = await this.coursereviewRepo.findOne({ where: { id: id } });
 
    if (!coursereview) {
      throw new NotFoundException(' not found');
    }
    await this.coursereviewRepo.update(coursereview.id, updateCoursereviewDto);
  }

  remove(id: number) {
    return `This action removes a #${id} coursereview`;
  }
}
