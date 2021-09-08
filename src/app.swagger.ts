import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { appConstants } from './config/constants.config';

export const initSwagger = (app: INestApplication) => {
  const swaggerConfig = new DocumentBuilder()
    .setTitle(appConstants.projectName)
    .addBearerAuth()
    .setDescription('Esta es una API Creada con NestJS...')
    // .addTag('Tag')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/docs', app, document);
};
