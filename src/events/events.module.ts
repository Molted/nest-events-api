import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { EventsController } from './events.controller';
import { Attendee } from './entities/attendee.entity';
import { EventsService } from './services/events.service';
import { Repository } from 'typeorm';

@Module({
	imports: [
		TypeOrmModule.forFeature([Event, Attendee]),
	],
	controllers: [EventsController],
	providers: [EventsService, Repository],
})
export class EventsModule {}
