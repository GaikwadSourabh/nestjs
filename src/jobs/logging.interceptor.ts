import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";


@Injectable()
export class LogginIntercepater  implements NestInterceptor
{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> 
    {
       const req=context.switchToHttp().getRequest();
       const method =req.method;
       const url = req.url;  
       const now = Date.now();
       console.log(`[${method}] ${url} -request recived`);
       
       
       return next.handle().pipe(
        tap(()=>console.log(`[${method}] ${url} - Resone send in ${Date.now() -now}ms`))
       )
    }
}