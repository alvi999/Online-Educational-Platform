import { Injectable } from '@nestjs/common';
import { CreateAllUserDto } from './dto/create-all-user.dto';
import { UpdateAllUserDto } from './dto/update-all-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AllUsers } from 'src/entities/all-user.entity';
import { Repository } from 'typeorm';
import { Applyinstructor } from 'src/entities/applyinstructor.entity';

@Injectable()
export class AllUsersService {

  constructor(
    @InjectRepository(AllUsers)
    private allUserRepository: Repository<AllUsers>,
    @InjectRepository(Applyinstructor)
    private applyinstructorRepository: Repository<Applyinstructor>,
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

  async approveApplyInstructor(id: number) {
    const user = await this.applyinstructorRepository.findOne({ where: { id: id } });
    user.approval = true;
    return this.applyinstructorRepository.save(user);
  }
  

  remove(id: number) {
    return `This action removes a #${id} allUser`;
  }
}
