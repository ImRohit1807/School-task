import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ParentController } from './parent.controller';
import { ParentService } from './parent.service';
import { Parent } from './parent.entity';
import { Student } from 'src/student/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Parent, Student])],
  controllers: [ParentController],
  providers: [ParentService],
})
export class ParentModule {}
