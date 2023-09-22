import { Quiz } from "src/quiz/entities/quiz.entity";
import { Column, Entity, PrimaryGeneratedColumn, Unique, OneToMany, ManyToMany } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    username: string;

    @Column()
    create_date: Date;

    @Column()
    roles: string = "[]";

    @OneToMany(() => Quiz, (quiz) => quiz.creator)
    quizs: Quiz[];

    @ManyToMany(() => Quiz, (quiz) => quiz.lovers)
    loved: Quiz[];
}
