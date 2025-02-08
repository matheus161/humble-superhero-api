import { INestApplication, ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { ThrottlerExceptionFilter } from '../filters/throttler-exception.filter';

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
};
