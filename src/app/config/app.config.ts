import { INestApplication, ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

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
};
