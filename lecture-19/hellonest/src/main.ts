import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const app2 = await NestFactory.create(AppModule);
  await app2.listen(8000);
}

bootstrap();
