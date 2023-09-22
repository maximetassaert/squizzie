// question.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Quiz } from './quiz.entity';
import { Image } from './image.entity';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Participation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  score: number;

  @ManyToOne(() => Quiz, (quiz) => quiz.participations)
  quiz: Quiz;

  @ManyToOne(() => User)
  user: User;

  @Column({nullable: true})
  note: number;
}