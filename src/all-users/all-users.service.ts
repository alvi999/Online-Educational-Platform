import { Injectable } from '@nestjs/common';
import { CreateAllUserDto } from './dto/create-all-user.dto';
import { UpdateAllUserDto } from './dto/update-all-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AllUsers } from 'src/entities/all-user.entity';
import { Repository } from 'typeorm';
import { Applyinstructor } from 'src/entities/applyinstructor.entity';
import { Coursereview } from 'src/entities/coursereview.entity';
import { Newcourse } from 'src/entities/newcourse.entity';
import { Forum } from 'src/entities/forum.entity';

@Injectable()
export class AllUsersService {
 
  
   constructor(
    @InjectRepository(AllUsers)
    private allUserRepository: Repository<AllUsers>,
    @InjectRepository(Applyinstructor)
    private applyinstructorRepository: Repository<Applyinstructor>,
    @InjectRepository(Coursereview)
    private coursereviewRepository: Repository<Newcourse>,
    @InjectRepository(Newcourse)
    private newcourseRepository: Repository<Newcourse>,
    @InjectRepository(Forum)
    private forumRepository: Repository<Forum>,
  ){}

  async findByUsername(username: string): Promise<AllUsers | undefined> {
      return this.allUserRepository.findOne({ where: { username } });
  }
  async create(createAllUserDto: CreateAllUserDto): Promise<AllUsers> {
    const newUser=this.allUserRepository.create(createAllUserDto);
    return this.allUserRepository.save(newUser);
  }

  async findAll(): Promise<AllUsers[]> {
    return this.allUserRepository.find();
  }

  
  findOne(id: number) {
    return this.allUserRepository.findOne({where:{id: id}});
  }

  update(id: number, updateAllUserDto: UpdateAllUserDto) {
    return `This action updates a #${id} allUser`;
  }

  ApplyInstructor(){
     return this.applyinstructorRepository.find();
  }
  Coursereview() {
    return this.coursereviewRepository.find();
  }
  Newcourse(){
    return this.newcourseRepository.find();
 }
 Forum(){
  return this.forumRepository.find();
}
  async approveApplyInstructor(id: number) {
    const user = await this.applyinstructorRepository.findOne({ where: { id: id } });
    user.approval = true;
    return this.applyinstructorRepository.save(user);
  }

  async approveNewcourse(id: number) {
    const user = await this.newcourseRepository.findOne({ where: { id: id } });
    user.approval = true;
    return this.newcourseRepository.save(user);
  }

  async removecoursereview(id: number) {
    const review = await this.coursereviewRepository.findOne({ where: { id: id } });
    if (!review) {
      throw new Error('Course review not found');
    }
    return this.coursereviewRepository.delete(id);
  }
  
  async removenewcourse(email: string): Promise<void> {
    const review = await this.newcourseRepository.findOne({ where: { email: email } });
    if (!review) {
      throw new Error('Course review not found');
    }
    await this.newcourseRepository.delete({ email: email });
  }

  remove(id: number) {
    return `This action removes a #${id} allUser`;
  }
}
