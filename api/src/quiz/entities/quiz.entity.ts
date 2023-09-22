// quiz.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Question } from './question.entity';
import { User } from 'src/user/entities/user.entity';
import { Participation } from './participation.entity';

@Entity()
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  title: string = 'test';

  @ManyToOne(() => User, (user) => user.quizs)
  creator: User;

  @ManyToMany(() => User, (user) => user.loved)
  @JoinTable({
    name: "quiz_loved_users",
    joinColumn: {
      name: "user_id",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "quiz_id",
      referencedColumnName: "id"
    }
  })
  lovers: User[];

  @OneToMany(() => Question, (question) => question.quiz, { cascade: true })
  questions: Question[];

  @OneToMany(() => Participation, (participation) => participation.quiz)
  participations: Participation[];
}
