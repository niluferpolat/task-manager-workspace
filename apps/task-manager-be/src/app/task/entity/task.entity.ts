import { TaskStatus } from "@task-manager-workspace/models";
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne} from "typeorm";
import { Project } from "../../project/entity/project.entity";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  taskText!: string;

  @Column()
  userId!: number;

  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.TODO })
  status!: TaskStatus;

  @Column({ type: 'int', default: 0 })
  priority!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @Column({type:'timestamp without time zone'})
  deadline!:Date;

  @ManyToOne(()=> Project, (project)=> project.tasks)
  project:Project
}