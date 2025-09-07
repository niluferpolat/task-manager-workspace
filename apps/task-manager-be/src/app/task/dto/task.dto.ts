import { TaskStatus } from '@task-manager-workspace/models';
import { IsInt, IsNotEmpty, IsString, IsOptional, IsEnum } from 'class-validator';

export class CreateTaskDto {
  @IsString() @IsNotEmpty()
  title!: string;

  @IsString() @IsNotEmpty()
  taskText!: string;      

  @IsInt()
  userId!: number;

  @IsOptional() @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  priority?: number;
}