import { Body, Controller, Param, ParseIntPipe, Post } from "@nestjs/common";
import { AccountServices } from "../services/account.service";
import { ParseDatePipe } from '../parse-date.pipe';

@Controller("/job")
export class AccountController
{
     constructor(private readonly accountServices:AccountServices){}

     @Post(":id/interview")
     createJob(@Param("id",ParseIntPipe)id:number, @Body("timestamp",ParseDatePipe) date:string)
     {
        console.log(date);
        return this.accountServices.scheduleJobInterview(id,date);
     }
}