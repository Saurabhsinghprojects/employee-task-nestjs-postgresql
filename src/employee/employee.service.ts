import { Injectable, NotFoundException} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "src/task/task.entity";
import { Repository } from "typeorm";
import { Employee } from "./employee.entity";
import { Employeemodel } from "./employee.model";

@Injectable()
export class EmployeeService{
    constructor(
        @InjectRepository(Employee) private employeeRepository: Repository<Employee>,
        @InjectRepository(Task) private taskRepository: Repository<Task>
    ){}
 

    
   
    async getAllemployee(){
        return await this.employeeRepository.find();
    }
    async getSingleEmployee(id:number){
        const tasks=await this.taskRepository.find({employeeId:id});
        const myEmployee=await this.employeeRepository.find({id:id});
       
        return{
            myEmployee,
            tasks:tasks
        }
    }

    async createNewEmployee(name:string,email:string,phone:string,hireDate:Date,position:string){
        const myId = Math.floor(Math.random() * 10000);
        if(!hireDate) hireDate= new Date();
        const newEmployee= new Employeemodel(myId,name,email,phone,hireDate,position);
        return await this.employeeRepository.save(newEmployee);
    }
    async updateEmployee(id:number,name:string,email:string,phone:string,hireDate:Date,position:string){
        const myEmployee =await this.employeeRepository.find({id:id});
        if(!myEmployee){
            throw new NotFoundException('Could not find employee');
        }
        const updatedEmployee= myEmployee[0];
        if(name){
            updatedEmployee.name=name;
        }
        if(email){
            updatedEmployee.email=email;
        }
        if(phone){
            updatedEmployee.phone=phone;
        }
        if(hireDate){
            updatedEmployee.hireDate=hireDate;
        }
        if(position){
            updatedEmployee.position=position;
        }
        return await this.employeeRepository.save(updatedEmployee);
    }
    async deleteEmployee(id:number){
        const myEmployee =await this.employeeRepository.find({id:id});
        await this.employeeRepository.delete(myEmployee[0]);
    }
}