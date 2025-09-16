import { IsEnum, IsInt, IsOptional, IsString, IsDateString } from 'class-validator';
import { TaskStatus } from '@task-manager-workspace/models';

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  taskText?: string;

  @IsInt()
  @IsOptional()
  userId?: number;

  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;

  @IsInt()
  @IsOptional()
  priority?: number;

  @IsDateString()
  @IsOptional()
  deadline?: Date;

  @IsInt()
  @IsOptional()
  projectId?: number;
}
