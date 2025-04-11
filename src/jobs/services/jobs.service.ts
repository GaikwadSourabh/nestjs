// jobs/services/jobs.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class JobsService  implements OnModuleInit{
  onModuleInit() {
      console.log("JobsService onModuleInit");
  }
  createJob(jobDto: any): string {
    return `Job created with data: ${JSON.stringify(jobDto)}`;
  }
}
