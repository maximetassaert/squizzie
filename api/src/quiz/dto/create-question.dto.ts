import { IsNotEmpty } from "class-validator";

export class CreateQuestionDto {

    @IsNotEmpty()
    enonce: string;
  
    @IsNotEmpty()
    answer: boolean;
    
}
