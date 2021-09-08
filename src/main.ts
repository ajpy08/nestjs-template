import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT ? Number(process.env.PORT) : 3000;
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();

  await app.listen(port);
  logger.log(`Server is running in port: ${await app.getUrl()}`);
}
bootstrap();
