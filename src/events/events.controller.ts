import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEventDTO, UpdateEventDTO } from './dto/events.dto';

@Controller('events')
export class EventsController {
  @Get()
  findAll() {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return id;
  }

  @Post()
  create(@Body() input: CreateEventDTO) {
    return input;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() input: UpdateEventDTO) {
    return input;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {}
}
