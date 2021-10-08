import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = InstaPost & Document;

@Schema()
export class InstaPost {
  @Prop()
  imageId: string;
  @Prop()
  userId: string;
  @Prop()
  description: string;
  @Prop()
  likers: Array<string>;
}

export const PostSchema = SchemaFactory.createForClass(InstaPost);
