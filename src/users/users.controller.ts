import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

// decorators are predefined functions that run auto when called
@Controller('users') // /users
export class UsersController {
  /*
    GET /users or /users?role=value
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
   */

  constructor(private readonly usersService: UsersService) {} //const usersSevice = new UsersService(); //not exactly same, it handles extra stuff as well

  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    //since role is optional, therefore ? after role
    return this.usersService.findAll(role);
  }

  //@Get("products") /users/products
  //waterfall of routes -> /users/:id and /users/product (if id routes is placed before product then anything after /users will be read as id) (therefore product should be placed before id)

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id); //unary plus -> all params are strings but we are expecting a number in findOne method
  }

  @Post()
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.usersService.create(user);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    userUpdate: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.usersService.update(+id, userUpdate);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delele(+id);
  }
}
