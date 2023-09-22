import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, BadRequestException } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { Roles } from 'src/auth/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { User } from 'src/user/entities/user.entity';
import { CreateParticipationDto } from './dto/create-participation.dto';

@UseGuards(JwtAuthGuard)
@Controller('api/quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  create(@Body() createQuizDto: CreateQuizDto, @Request() req) {
    createQuizDto.creator = (new User()).id = req.user.id

    return this.quizService.create(createQuizDto);
  }

  @Post('/:id/participation')
  async createparticipation(@Param('id') id: number, @Body() createParticipationDto: CreateParticipationDto, @Request() req) {
    const quiz = await this.quizService.findOne(id);
    if(!quiz) return new BadRequestException('Ce quiz n\'existe pas');

    createParticipationDto.user = (new User()).id = req.user.id
    createParticipationDto.date = new Date();
    createParticipationDto.quiz = quiz;
    console.log(quiz)

    return this.quizService.createParticipation(createParticipationDto);
  }

  @Get()
  async findAll() {
    return await this.quizService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quizService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto) {
    return this.quizService.update(+id, updateQuizDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizService.remove(+id);
  }
}
