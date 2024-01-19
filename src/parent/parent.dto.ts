export class ScheduleMeetingDto {
  parentId: number;
  studentId: number;
  meetingDetails: string;
}

export class CreateParentDto {
  readonly name: string;
}
