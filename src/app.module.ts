import { BeforeApplicationShutdown, Module, OnApplicationBootstrap, OnApplicationShutdown } from '@nestjs/common';
import { usersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
import { EmployeeModule } from './employee/employee.module';
import { MongooseError } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseConfigService } from './mongoose-config.service';



@Module({
  imports: [
    usersModule,
    JobsModule,
    EmployeeModule,
    ConfigModule.forRoot({
      isGlobal: true, // makes env variables available app-wide
    }),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => {

    //     const envType = configService.get("NODE_ENV");

    //     if(envType === "LOCAL")
    //     {
    //       console.log('✅ Connecting to local MongoDB');
    //       return{
    //         uri:"mongodb://localhost:27017/nest"
    //       }
    //     }

    //     const username = configService.get("DATABASE_USER");
    //     const password = configService.get("DATABASE_PASSWORD");
    //     const host = configService.get("DATABASE_HOST");
    //     const db = configService.get("DATABASE_NAME");

    //     const uri = `mongodb+srv://${username}:${password}@${host}/${db}?retryWrites=true&w=majority&appName=Cluster0`;
    //     console.log('🌐 Connecting to cloud MongoDB');
    //     return { uri };
    //   },
    //   inject:[ConfigService],
    // }),

    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      useClass:MongooseConfigService,
    })
  ],
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
