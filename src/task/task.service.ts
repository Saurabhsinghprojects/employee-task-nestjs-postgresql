import { Injectable, NotFoundException} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Task } from "./task.entity";
import { Taskmodel } from "./task.model";

@Injectable()
export class TaskService{
    constructor(
        @InjectRepository(Task) private taskRepository: Repository<Task>,
    ){}
    
   
    async getAllTask(){
        return await this.taskRepository.find();
    }
    async getSingleTask(id:number){
        return await this.taskRepository.find({id:id});
    }

    async createNewTask(title:string,description:string,dueDate:Date,employeeId:number){
        const myId = Math.floor(Math.random() * 10000);
        if(!dueDate) dueDate= new Date();
        const newTask= new Taskmodel(myId,title,description,dueDate,employeeId);
        return await this.taskRepository.save(newTask);
    }
    async updateTask(id:number,title:string,description:string,dueDate:Date,employeeId:number){
        const myTask =await this.taskRepository.find({id:id});
        if(!myTask){
            throw new NotFoundException('Could not find task');
        }
        const updatedTask= myTask[0];
        if(title){
            updatedTask.title=title;
        }
        if(description){
            updatedTask.description=description;
        }
        if(dueDate){
            updatedTask.dueDate=dueDate;
        }
        if(employeeId){
            updatedTask.employeeId=employeeId;
        }
        
        return await this.taskRepository.save(updatedTask);
    }
    async deleteTask(id:number){
        const myTask =await this.taskRepository.find({id:id});
        await this.taskRepository.delete(myTask[0]);
    }
}