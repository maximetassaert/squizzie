import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.use(cors({
    origin: [
      'http://127.0.0.1:3000',
      'http://localhost:3000'

    ],
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  }));

  await app.listen(3001);
}
bootstrap();
