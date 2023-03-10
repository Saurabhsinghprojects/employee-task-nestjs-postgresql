import { Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import { EmployeeService } from "./employee.service";

@Controller('employees')
export class EmployeeController {
    constructor(private readonly employeesService: EmployeeService){}
    @Get()
    getAllEmployee(){
        return this.employeesService.getAllemployee();
    }
    @Get(':id')
    getSingleEmployee(@Param('id') myid:number){
        return this.employeesService.getSingleEmployee(myid);
    }
    @Post('/create')
    async createEmployee(@Body('name') empName:string,@Body('email') empEmail:string,@Body('phone') empPhone:string,@Body('hireDate') empHireDate:Date,@Body('position') empPosition:string){
        return await this.employeesService.createNewEmployee(empName,empEmail,empPhone,empHireDate,empPosition);
    }
    @Patch(':id')
    async updateEmployee(@Param('id') empId:number,@Body('name') empName:string,@Body('email') empEmail:string,@Body('phone') empPhone:string,@Body('hireDate') empHireDate:Date,@Body('position') empPosition:string){
        this.employeesService.updateEmployee(empId,empName,empEmail,empPhone,empHireDate,empPosition);
        return null;
    }
    @Delete(':id')
    removeEmployee(@Param('id') empId:number,){
        this.employeesService.deleteEmployee(empId);
        return null;
    }
    
}