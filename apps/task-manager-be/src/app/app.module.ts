import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm"
import { TaskModule } from './task/task.module';
import { ProjectService } from './project/project.service';
import { ProjectModule } from './project/project.module';
import * as fs from 'fs';

function runningInDocker(): boolean {
  try {
    if (fs.existsSync('/.dockerenv')) return true;
    const cgroup = fs.readFileSync('/proc/1/cgroup', 'utf8');
    return cgroup.includes('docker') || cgroup.includes('kubepods');
  } catch {
    return false;
  }
}

const IN_DOCKER = runningInDocker();
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: IN_DOCKER ? 'postgres' : 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'task_manager',
    entities: [],
    synchronize: true,
    autoLoadEntities: true,
     logging: true,         
  }),
TaskModule,
ProjectModule],
  controllers: [],
  providers: [ProjectService],
})
export class AppModule {}
