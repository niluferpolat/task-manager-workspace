import { TaskStatus } from '@task-manager-workspace/models';
import { IsInt, IsNotEmpty, IsString, IsOptional, IsEnum, IsDateString } from 'class-validator';

export class CreateTaskDto {
  @IsString() @IsNotEmpty()
  taskText!: string;      

  @IsInt()
  userId!: number;

  @IsOptional() 
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsInt()
  @IsOptional()
  priority?: number;

  @IsOptional()
  @IsDateString()
  deadline?: Date

  
  @IsInt()
  @IsOptional()
  projectId?: number; 
}