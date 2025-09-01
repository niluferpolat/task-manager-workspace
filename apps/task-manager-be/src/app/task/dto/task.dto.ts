import { IsString, IsNotEmpty, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
export class CreateTaskDto {
@IsString()
@IsNotEmpty()  
taskText!: string; 
@IsInt()
@Type(() => Number)
@IsNotEmpty()
userId: number;

@IsNotEmpty()
@IsString()
title: string;
}