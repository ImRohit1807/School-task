import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from './teacher.entity';
import { CreateTeacherDto } from './teacher.dto';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
  ) {}

  async createTeacher(createTeacherDto: CreateTeacherDto): Promise<any> {
    try {
      const teacher = this.teacherRepository.create(createTeacherDto);
      return await this.teacherRepository.save(teacher);
    } catch (error) {
      throw new Error(`Error creating teacher: ${error.message}`);
    }
  }
}
