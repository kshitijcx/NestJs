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
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    //since role is optional, therefore ? after role
    return ['list of users'];
  }

  //@Get("products") /users/products
  //waterfall of routes -> /users/:id and /users/product (if id routes is placed before product then anything after /users will be read as id) (therefore product should be placed before id)

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
