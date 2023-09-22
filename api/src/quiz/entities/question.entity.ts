// question.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Quiz } from './quiz.entity';
import { Image } from './image.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  enonce: string;

  @Column()
  answer: boolean;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz;

  @ManyToOne(() => Image, (image) => image.question)
  image: Image;

  // ... d'autres propriétés et méthodes
}