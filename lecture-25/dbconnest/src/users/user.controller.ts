import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './user.service';
import { Request } from 'express';

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/users/')
  getAll(): any {
    return this.userService.getAll();
  }

  @Post('/users/')
  @UseGuards(AuthGuard('firebase'))
  createUser(@Body() user, @Req() request: Request): any {
    return this.userService.createUser(user);
  }
}
