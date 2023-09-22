import { IsNotEmpty } from "class-validator";
import { Quiz } from "../entities/quiz.entity";
import { User } from "src/user/entities/user.entity";

export class CreateParticipationDto {

    @IsNotEmpty()
    score: Number;

    note: Number;
    user: User;
    quiz: Quiz;
    date: Date;
    
}
