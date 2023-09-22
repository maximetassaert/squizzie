import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { Question } from './entities/question.entity';
import { Image } from './entities/image.entity';
import { Participation } from './entities/participation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Question, Image, Participation])], 
  controllers: [QuizController],
  providers: [QuizService],
  exports: [QuizService]
})
export class QuizModule {}
