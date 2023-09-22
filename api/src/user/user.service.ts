import { BadRequestException, Injectable, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  
  async create(createUserDto: CreateUserDto) {

    let user = await this.userRepository.findOne({where: {email: createUserDto.email}})
    if(user){
      throw new BadRequestException("user already exists")
    }

    user = await this.userRepository.create(createUserDto);
    user.create_date = new Date();
    const saltOrRounds = 10;
    user.password = await bcrypt.hash(user.password, saltOrRounds);
    await this.userRepository.save(user);
    user.password = "******"

    return user;
  }

  async findAll() {
    let users = await this.userRepository.find();
    return users.map(user => {
      user.password = '********'
      return user
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  
  async findOneByEmail(email: string): Promise<any> {
    return await this.userRepository.findOneBy({email : email});
  }
}
