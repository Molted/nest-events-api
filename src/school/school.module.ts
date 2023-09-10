import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from './entities/subject.entity';
import { TrainingController } from "./training.controller";
import { Teacher } from "./entities/teacher.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Subject, Teacher])],
  controllers: [TrainingController]
})
export class SchoolModule { }