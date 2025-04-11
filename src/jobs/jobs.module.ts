import { Module, OnModuleInit } from "@nestjs/common";
import { JobsController } from "./controllers/jobs.controller";
import { JobsService } from "./services/jobs.service";

@Module({
    controllers:[JobsController],
    providers:[JobsService],
    exports: [JobsService]
})
export class JobsModule implements OnModuleInit
{
    onModuleInit() {
        console.log("Jobs module init");
    }
}