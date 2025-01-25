//DTO = Data Transfer Object
//Defines a schema for the object

export class CreateUserDto {
  name: string;
  email: string;
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}