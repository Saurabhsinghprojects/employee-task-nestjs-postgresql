import { Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import { TaskService } from "./task.service";

@Controller('tasks')
export class TaskController {
    constructor(private readonly tasksService: TaskService){}
    @Get()
    getAllTask(){
        return this.tasksService.getAllTask();
    }
    @Get(':id')
    getSingleTask(@Param('id') myid:number){
        return this.tasksService.getSingleTask(myid);
    }
    @Post('/create')
    async createTask(@Body('title') taskTitle:string,@Body('description') taskDesc:string,@Body('dueDate') taskDueDate:Date,@Body('employeeId') taskEmpId:number){
        return await this.tasksService.createNewTask(taskTitle,taskDesc,taskDueDate,taskEmpId);
    }
    @Patch(':id')
    async updateTask(@Param('id') taskId:number,@Body('title') taskTitle:string,@Body('description') taskDesc:string,@Body('dueDate') taskDueDate:Date,@Body('employeeId') taskEmpId:number){
        this.tasksService.updateTask(taskId,taskTitle,taskDesc,taskDueDate,taskEmpId);
        return null;
    }
    @Delete(':id')
    removeTask(@Param('id') taskId:number,){
        this.tasksService.deleteTask(taskId);
        return null;
    }
    
}