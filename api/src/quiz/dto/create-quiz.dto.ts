import { IsNotEmpty } from "class-validator";
import { CreateQuestionDto } from "./create-question.dto";
import { User } from "src/user/entities/user.entity";

export class CreateQuizDto {

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    questions: CreateQuestionDto[];

    creator: User;
}
