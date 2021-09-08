import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { constants } from './config/config';

export const initSwagger = (app: INestApplication) => {
  const swaggerConfig = new DocumentBuilder()
    .setTitle(constants.projectName)
    .addBearerAuth()
    .setDescription('Esta es una API Creada con NestJS...')
    // .addTag('factset')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/docs', app, document);
};
