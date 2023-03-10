import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "src/task/task.entity";
import { EmployeeController } from "./employee.controller";
import { Employee } from "./employee.entity";
import { EmployeeService } from "./employee.service";

@Module({
    controllers:[EmployeeController],
    imports:[TypeOrmModule.forFeature([Employee,Task])],
    providers:[EmployeeService],

})

export class EmployeeModule{}