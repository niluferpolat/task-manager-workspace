import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Project } from "../../project/entity/project.entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique:true
    })
    email: string;

    @Column()
    password: string;

    @Column()
    profilePhoto: string

    @OneToMany(()=> Project, (project)=>project.user)
    project: Project[]
}