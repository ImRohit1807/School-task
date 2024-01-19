import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { ParentModule } from './parent/parent.module';
import { Parent } from './parent/parent.entity';
import { Student } from './student/student.entity';
import { TeacherModule } from './teacher/teacher.module';
import { ClassModule } from './class/class.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      entities: [Student, Parent],
      database: 'schoolDb',
    }),
    StudentModule,
    ParentModule,
    TeacherModule,
    ClassModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
