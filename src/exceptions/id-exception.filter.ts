import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { IdException } from "./id-exceptions";
import { error } from "console";
import { Response } from "express";
import { writeFile } from "fs";
import { join } from "path";

@Catch(IdException)
export class IdExceptionFilter implements ExceptionFilter
{
    catch(exception: IdException, host: ArgumentsHost) {

         const ctx = host.switchToHttp();
         const response=ctx.getResponse<Response>();
         const request = ctx.getRequest<Request>();
         const status = HttpStatus.BAD_REQUEST; // Replace with appropriate status
         const msg = exception.message;

        const body ={
           statusCode:status,
           timestamp:new Date().toISOString(),
           message:msg,
           path:request.url,
        };
        this.writeHttpLog(body); 

        response.status(status).json(body);
    }

    private async writeHttpLog(data:Record<string,any>)
    {
        const LOGS_DIR = join(__dirname,`${Date.now()}-log.json`);
        try{
            await new Promise<void>((resolve, reject) => {
                writeFile(LOGS_DIR, JSON.stringify(data), (err) => {
                    if (err) reject(err);
                    else resolve();
                });
            });
        }catch(err)
        {
            return;
        }
    }
}