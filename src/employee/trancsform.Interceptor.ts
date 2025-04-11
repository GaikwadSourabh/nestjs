import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable, timestamp } from "rxjs";

@Injectable()
export class TransformIntercepator implements NestInterceptor
{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(map((data) => ({
        status: 'success',
        data: data,
        timestamp: new Date().toISOString(),
    })));
    }
}