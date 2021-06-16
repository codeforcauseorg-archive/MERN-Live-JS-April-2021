import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { InstaPost } from './schemas/post.schema';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { FirebaseUser } from '@tfarras/nestjs-firebase-auth';
import * as moment from 'moment';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @UseGuards(AuthGuard('firebase'))
  create(@Body() postBody: InstaPost, @Req() req: Request) {
    let user = req.user as FirebaseUser;
    postBody.userId = user.uid;
    postBody.userName = user.name;
    let now = new Date();
    postBody.time = moment(now).format('DD-MM-YYYY');
    return this.postsService.create(postBody);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Patch(':id/like/')
  updateLike(@Param('id') id: string, @Body() infoBody) {
    return this.postsService.updateLike(id, infoBody.userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
