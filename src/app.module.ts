import { Module } from '@nestjs/common';
import { usersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';



@Module({
  imports: [usersModule,JobsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
