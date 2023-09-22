import { BadRequestException, Injectable, Request, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Quiz } from './entities/quiz.entity';
import * as bcrypt from 'bcrypt';
import { plainToInstance } from 'class-transformer';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateParticipationDto } from './dto/create-participation.dto';
import { Participation } from './entities/participation.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>,
    @InjectRepository(Participation)
    private participationRepository: Repository<Participation>,

  ) {}
  
  @UseGuards(JwtAuthGuard)
  async create(createQuizDto: CreateQuizDto) {
    const quiz = plainToInstance(Quiz, createQuizDto);
    console.log(quiz)
    return await this.quizRepository.save(quiz);;
  }

  async findAll() {
    const quizes = await this.quizRepository.find({
      relations: {
        questions: true,
        participations: true,
        creator: true
      }
    });
    return this.formatQuizes(quizes);

  }

  async findOne(id: number) {
    let quiz: any = await this.quizRepository.findOne({
      relations: {
          questions: true,
          participations: true,
          creator: true
      },
      where: { id },
    })
    quiz = this.formatQuizes([quiz])[0];
    return quiz;
  }

  formatQuizes(quizes: any[]){
    return quizes.map((quiz) => {
      quiz.totalParticipations = quiz.participations.length
      let totalNote = 0;
      let participationWithOutNote = 0;
      let totalScore = 0
      quiz.participations.map((participation) => {
        if(participation.note) totalNote += participation.note
        else participationWithOutNote++;
        totalScore += participation.score
      })
      quiz.averageNote = totalNote / (quiz.totalParticipations - participationWithOutNote)
      quiz.averageScore = totalScore / quiz.totalParticipations
  
      quiz.participations = undefined;
      return quiz;
    })
  }
  async createParticipation(createParticipationDto: CreateParticipationDto): Promise<Participation>{
    const participation = plainToInstance(Participation, createParticipationDto);
    return await this.participationRepository.save(participation);
  }

  update(id: number, updateQuizDto: UpdateQuizDto) {
    return `This action updates a #${id} quiz`;
  }

  remove(id: number) {
    return `This action removes a #${id} quiz`;
  }
  
}
