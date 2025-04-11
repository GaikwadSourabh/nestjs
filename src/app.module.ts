import { BeforeApplicationShutdown, Module, OnApplicationBootstrap, OnApplicationShutdown } from '@nestjs/common';
import { usersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
import { EmployeeModule } from './employee/employee.module';



@Module({
  imports: [usersModule,JobsModule,EmployeeModule],
  controllers: [],
  providers: [],
})
export class AppModule implements OnApplicationBootstrap,BeforeApplicationShutdown,OnApplicationShutdown {

  onApplicationBootstrap() {
      console.log("Application bootstreap");
  }
  beforeApplicationShutdown(signal?: string) {
      console.log("Before Application shutdown");
  }
  onApplicationShutdown(signal?: string) {
      console.log("Application shutdown");
  }
  
}
