import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Employee } from "src/employee/employee.entity";
import { Task } from "src/task/task.entity";

export const typeOrmConfig: TypeOrmModuleOptions={
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'pass',
    database:'employee',
  entities:[Employee,Task],
  autoLoadEntities: true,
  synchronize: true,
  };