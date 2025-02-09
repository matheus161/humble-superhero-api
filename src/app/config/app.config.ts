import { INestApplication, ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { ThrottlerExceptionFilter } from '../filters/throttler-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export default (app: INestApplication) => {
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: false,
    }),
  );

  app.use(helmet());

  app.enableCors();

  app.useGlobalFilters(new ThrottlerExceptionFilter());

  const documentBuilderConfig = new DocumentBuilder()
    .setTitle('Humble Superhero API')
    .setDescription('Create and list humble superheroes')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, documentBuilderConfig);

  SwaggerModule.setup('docs', app, document);
};
