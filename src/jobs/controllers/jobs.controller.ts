import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateJobDTO } from "../create-job.dto";
import { Paginable } from "../interface/paginable.interface"
import { JoiValidationPipe } from "../joi-validation.pipe";
// {createJobSchema} from "../create-job.schema"
import { JobsService } from "../services/jobs.service";

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

    @Get(":id")
    findJob(@Param("id",new ValidationPipe({transform:true})) id:number)
    {
        console.log(typeof id);
        return {success:true};
    }
}
