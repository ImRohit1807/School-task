import { Teacher } from '../teacher/teacher.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Teacher, (teacher) => teacher.class)
  teacher: Teacher[];
}
