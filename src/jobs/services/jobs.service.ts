// jobs/services/jobs.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class JobsService {
  createJob(jobDto: any): string {
    return `Job created with data: ${JSON.stringify(jobDto)}`;
  }
}
