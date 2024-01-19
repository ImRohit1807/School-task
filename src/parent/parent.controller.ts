import { Body, Controller, Post } from '@nestjs/common';
import { ParentService } from './parent.service';
import { CreateParentDto, ScheduleMeetingDto } from './parent.dto';

@Controller('parent')
export class ParentController {
  constructor(private parentService: ParentService) {}

  @Post()
  async createParent(@Body() createParent: CreateParentDto): Promise<any> {
    this.parentService.createParent(createParent);
  }

  @Post('schedule-meeting')
  async scheduleMeeting(@Body() dto: ScheduleMeetingDto): Promise<void> {
    return this.parentService.scheduleMeeting(dto);
  }
}
