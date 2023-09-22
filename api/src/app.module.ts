import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Image } from './quiz/entities/image.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/entities/user.entity';
import { Question } from './quiz/entities/question.entity';
import { Quiz } from './quiz/entities/quiz.entity';
import { Participation } from './quiz/entities/participation.entity';
import { QuizModule } from './quiz/quiz.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Question, Image, Quiz, User, Participation],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    QuizModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
