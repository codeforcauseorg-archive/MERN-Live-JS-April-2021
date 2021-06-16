import { Injectable } from '@nestjs/common';
import { Image, ImageDocument } from './schemas/image.scheme';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ImagesService {
  constructor(
    @InjectModel(Image.name) private imageModel: Model<ImageDocument>,
  ) {}

  async create(imageBody: Image): Promise<Image> {
    let imageCollection = new this.imageModel(imageBody);
    let response = await imageCollection.save();
    return response;
  }

  findOne(fname: string) {
    return this.imageModel.findById(fname);
  }
}
