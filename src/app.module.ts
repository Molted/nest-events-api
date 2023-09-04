import { Module } from '@nestjs/common';
import { EventsController } from './events/events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './events/entities/event.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'example',
      database: 'nest-events',
      entities: [Event],
      synchronize: true,
  }),
  TypeOrmModule.forFeature([Event]),
],
  controllers: [EventsController],
  providers: [],
})
export class AppModule {}
