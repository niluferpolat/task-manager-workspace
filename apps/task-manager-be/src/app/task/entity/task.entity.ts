import { TaskStatus } from "@task-manager-workspace/models";
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  taskText!: string;

  @Column()
  userId!: number;

  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.TODO })
  status!: TaskStatus;

  @Column({ type: 'int', default: 0 }) // 0: low, 1: med, 2: high gibi
  priority!: number;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;
}