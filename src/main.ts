import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppExceptionFilter } from './exceptions/app-exception.filter';
import { LogginIntercepater } from './jobs/logging.interceptor';
import { TransformIntercepator } from './employee/trancsform.Interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //const httpAdapterHost = app.get(HttpAdapterHost);
 // app.useGlobalFilters(new AppExceptionFilter(httpAdapterHost));
  app.useGlobalInterceptors(new LogginIntercepater())
  app.useGlobalInterceptors(new TransformIntercepator())
  await app.listen(process.env.PORT ?? 3000);

  // setTimeout(()=>{
  //   app.close();
  // },5000);

 
}
bootstrap();
