import { Controller, Post, Body } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { Teacher } from './teacher.entity';
import { CreateTeacherDto } from './teacher.dto';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  async createTeacher(
    @Body() createTeacherDto: CreateTeacherDto,
  ): Promise<Teacher> {
    return this.teacherService.createTeacher(createTeacherDto);
  }
}
