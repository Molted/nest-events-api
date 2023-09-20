import { Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Event } from '../entities/event.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EventsService {
  private readonly logger = new Logger(EventsService.name);

  constructor(
    @InjectRepository(Event)
    private readonly eventsRepository: Repository<Event>,
  ) {}

  private getEventsBaseQuery() {
    return this.eventsRepository
      .createQueryBuilder('e')
      .orderBy('e.id', 'DESC');
  }

  async getEvent(id: number): Promise<Event | undefined> {
    const query = this.getEventsBaseQuery()
      .andWhere('e.id = :id', { id });

    this.logger.debug(query.getSql());

    return await query.getOne(); // ? getMany() if you want to get many results
  }
}
