import { IsInt, IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { Priority, TaskStatus } from '@task-manager-workspace/models';

export class UpdateTaskDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEnum(Priority)
  @IsNotEmpty()
  priority: Priority;

  @IsEnum(TaskStatus)
  @IsNotEmpty()
  status: TaskStatus;
}
