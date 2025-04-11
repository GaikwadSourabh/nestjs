import { Controller, Get, Param, ParseIntPipe, Post, Put, Req, UseInterceptors } from "@nestjs/common";
import { LogginIntercepater } from "src/jobs/logging.interceptor";
import { TransformIntercepator } from "../trancsform.Interceptor";

@Controller("/employee")
export class EmployeeController
{

    @UseInterceptors(LogginIntercepater)
    @Get("refs")
    findJobRefs(@Req() req:Request)
    {
        console.log(req["ua"]);
        return{success:true,message:"Job refs list"};
    }

    @UseInterceptors(TransformIntercepator)
    @Get("ref")
    createJobRef()
    {
        return { name: 'Alice', role: 'admin' }; 
    }

    @Put(":jobId")
    updateJobId(@Param("jobId",ParseIntPipe)jobId:number)
    {
        return {success:true,jobId,message:"Job updated"};
    }
}