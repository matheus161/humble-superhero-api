import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuperheroModule } from 'src/superheroe/superhero.module';

@Module({
  imports: [SuperheroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
