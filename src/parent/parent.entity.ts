import { Student } from '../student/student.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Parent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  meetingDetails: string;

  @OneToMany(() => Student, (student) => student.parent)
  student: Student[];
}
