import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppExceptionFilter } from './exceptions/app-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const httpAdapterHost = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AppExceptionFilter(httpAdapterHost));
  await app.listen(process.env.PORT ?? 3000);

  setTimeout(()=>{
    app.close();
  },5000);

  app.enableShutdownHooks();
}
bootstrap();
