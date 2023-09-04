import { PartialType } from '@nestjs/mapped-types';
import { IsDateString, IsString, Length } from 'class-validator';

export class CreateEventDTO {
  @IsString()
  @Length(5, 255)
  name: string;

  @Length(5, 255)
  description: string;

  @IsDateString()
  when: string;

  @Length(5, 255)
  address: string;
}

export class UpdateEventDTO extends PartialType(CreateEventDTO) {}