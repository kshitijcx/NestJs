//Partial type for optional fields
//will not throw error if some fields are missing when sending update data
import { CreateUserDto } from './create-user-dto';
import { PartialType } from '@nestjs/mapped-types'; //needs installation using npm

export class UpdateUserDto extends PartialType(CreateUserDto) {}
