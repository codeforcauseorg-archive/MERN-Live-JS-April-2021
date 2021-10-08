import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ImagesService } from './images.service';
import { Image } from './schemas/image.scheme';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post()
  create(@Body() imageBody: Image) {
    return this.imagesService.create(imageBody);
  }

  @Get(':fname')
  async findOne(@Param('fname') fname: string, @Res() response: Response) {
    let imageResponse = await this.imagesService.findOne(fname);
    let buffer = Buffer.from(imageResponse.content, 'base64');
    response.setHeader('Content-Type', 'image/png');
    response.send(buffer);
  }
}
