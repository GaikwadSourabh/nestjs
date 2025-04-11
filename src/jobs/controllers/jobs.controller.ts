import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, UseFilters, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateJobDTO } from "../create-job.dto";
import { Paginable } from "../interface/paginable.interface"
import { JoiValidationPipe } from "../joi-validation.pipe";
// {createJobSchema} from "../create-job.schema"
import { JobsService } from "../services/jobs.service";
import { IdExceptionFilter } from "src/exceptions/id-exception.filter";
import { IdException } from "src/exceptions/id-exceptions";
import { LogginIntercepater } from "../logging.interceptor";

@Controller("/jobs")
export class JobsController{
    constructor(private readonly jobsService:JobsService){}

    // @Post()
    // @UsePipes(new JoiValidationPipe(createJobSchema))
    // createJob(@Body() createJobDto:CreateJobDTO)
    // {
    //    return this.jobsService.createJob(createJobDto);
    // }

    @Post()
    createJob(@Body(ValidationPipe) createJobDto:CreateJobDTO)
    {
        return this.jobsService.createJob(createJobDto);
    }

    @Get("tags/:id")
    findJobTags(@Query(ValidationPipe) query:Paginable)
    {
        console.log(query);
        return{success:true}
    }

    
    @UseInterceptors(LogginIntercepater)
    @Get(":id")
    // @UseFilters(IdExceptionFilter)
    findJob(@Param("id",ParseIntPipe) id:number)
    {
        if(id<0)
        {
            throw new IdException();
        }
        return {success:true,id};
    }
}
