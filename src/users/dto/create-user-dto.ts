//DTO = Data Transfer Object
//Defines a schema for the object

//install class-validatorr andd class-transformer
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], { message: 'Valid role required' })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
