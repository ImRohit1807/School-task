import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Parent } from './parent.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/student/student.entity';
import { CreateParentDto, ScheduleMeetingDto } from './parent.dto';

@Injectable()
export class ParentService {
  constructor(
    @InjectRepository(Parent)
    private parentRepository: Repository<Parent>,
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async createParent(createParent: CreateParentDto): Promise<any> {
    try {
      const parent = this.parentRepository.create(createParent);
      return await this.parentRepository.save(parent);
    } catch (error) {
      throw new BadRequestException(`Error creating parent: ${error.message}`);
    }
  }

  async scheduleMeeting(dto: ScheduleMeetingDto): Promise<any> {
    try {
      const { parentId, studentId, meetingDetails } = dto;

      const parent = await this.parentRepository.findOne({
        where: { id: parentId },
      });

      if (!parent) {
        throw new Error(`Parent not found`);
      }

      const child = await this.studentRepository.find({
        where: { id: studentId, parent: { id: parentId } },
      });

      const student = child.find((child) => child.id === studentId);

      if (!student) {
        throw new Error('Student not found');
      }

      parent.meetingDetails = meetingDetails;

      await this.parentRepository.save(parent);
    } catch (error) {
      throw new BadRequestException(
        `Error scheduling meeting: ${error.message}`,
      );
    }
  }
}
