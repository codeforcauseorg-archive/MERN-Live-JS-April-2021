import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

export type PostDocument = InstaPost & Document;

@Schema()
export class InstaPost {
  @Prop()
  imageId: string;
  @Prop()
  userId: string;
  @Prop()
  userName: string;
  @Prop()
  description: string;
  @Prop()
  likers: Array<string>;
  @Prop()
  time: string;
}

export const PostSchema = SchemaFactory.createForClass(InstaPost);
