import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { OpenMode } from "fs";

@Injectable()
export class AccountServices implements OnModuleInit,OnModuleDestroy{

    constructor()
    {
    }
    onModuleInit() {
        console.log("on module(Meetings)init video server conn established");
    }
    onModuleDestroy() {
        console.log("on module(Meetings) destroy video server conn closed");
    }

    scheduleJobInterview(id: number, date: string): string {
        // Implement the logic for scheduling a job interview
        return `Job interview scheduled for user ${id} on ${date}`;
    }
}