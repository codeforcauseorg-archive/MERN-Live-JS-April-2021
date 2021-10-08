import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { FirebaseModule } from './firebase/firebase.module';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { ImagesModule } from './images/images.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '38.17.53.111',
      port: 34176,
      username: 'zomuser',
      password: 'Zomato@1234',
      database: 'zomdb',
      entities: [User],
      synchronize: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://anuj:anuj@cluster0.x36ik.mongodb.net/aprilinsta?retryWrites=true&w=majority',
    ),
    UsersModule,
    FirebaseModule,
    AuthModule,
    ImagesModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
