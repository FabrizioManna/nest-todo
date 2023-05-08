import {
  IsString,
  IsInt,
  IsEmail,
  MinLength,
  IsOptional,
  IsNotEmpty,
  MaxLength,
} from 'class-validator';

export class TodoDto {
  @IsString()
  @IsNotEmpty()
  description: string;
}