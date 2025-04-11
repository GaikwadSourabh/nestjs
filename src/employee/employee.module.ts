import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UserAgentOption} from "src/middlewares/user-agent.middleware"; // Ensure this path is correct
import { EmployeeController } from "./controllers/employee.controller";
import { UserAgentMiddleware } from "src/middlewares/user-agent.middleware";
import { AuthMiddleware } from "src/middlewares/auth.middleware";
import { JobsController } from "src/jobs/controllers/jobs.controller";

@Module({
    controllers:[EmployeeController],
    providers:[{provide:UserAgentOption,useValue:["chrome","firefox","postman"],}],
})
export class EmployeeModule implements NestModule
{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware,UserAgentMiddleware).forRoutes(JobsController);
    }
    
}