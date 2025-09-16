import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entity/user.entity';
import { Task } from '../../task/entity/task.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @CreateDateColumn()
  createdAt:Date;

  @ManyToOne(()=> User, (user)=> user.project)
  user:User

  @OneToMany(()=> Task,(task)=>task.project)
  tasks: Task[]
}
