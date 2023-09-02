import { Module } from '@nestjs/common';
import { EventsController } from './events/events.controller';

@Module({
  imports: [],
  controllers: [EventsController],
  providers: [],
})
export class AppModule {}
