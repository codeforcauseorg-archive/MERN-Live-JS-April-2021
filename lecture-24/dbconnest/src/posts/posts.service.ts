import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InstaPost, PostDocument } from './schemas/post.schema';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(InstaPost.name) private postModel: Model<PostDocument>,
  ) {}

  async create(postBody: InstaPost) {
    let postCollection = new this.postModel(postBody);
    let response = await postCollection.save();
    return response;
  }

  findAll() {
    return this.postModel.find();
  }

  findOne(id: string) {
    return this.postModel.findById(id);
  }

  async updateLike(id: string, userId: string) {
    let post = await this.postModel.findById(id);
    if (post.likers.includes(userId)) {
      post.likers = post.likers.filter((likerId) => likerId != userId);
    } else {
      post.likers.push(userId);
    }
    return post.save();
  }

  remove(id: string) {
    return `This action removes a #${id} post`;
  }
}
