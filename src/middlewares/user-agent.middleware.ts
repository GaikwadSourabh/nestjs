import { HttpStatus, Injectable, NestMiddleware, Optional } from "@nestjs/common";
import { NextFunction, Response } from "express";

export class UserAgentOption{
    accepted?:string[];
}

@Injectable()
export class UserAgentMiddleware implements NestMiddleware{
    constructor(@Optional() private options:UserAgentOption){}
    use(req: Request, res: Response, next: NextFunction)
    {
        const ua = req.headers["user-agent"];

        if(!this.isUserAgentAcceptable(ua))
        {
            res.status(HttpStatus.FORBIDDEN).json({message:"Not Allowed"});
            return;
        }
        req["ua"]=ua;
        next();
    }

    private isUserAgentAcceptable(userAgent:string)
    {
        const acceptedUserAgents = this.options?.accepted || [];

        if(!acceptedUserAgents.length)
        {
            return true;
        }

        return acceptedUserAgents.some((agent)=>
        userAgent.toLowerCase().includes(agent.toLowerCase()))
    }
}