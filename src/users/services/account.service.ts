import { Injectable } from "@nestjs/common";

@Injectable()
export class AccountServices{

    scheduleJobInterview(id: number, date: string): string {
        // Implement the logic for scheduling a job interview
        return `Job interview scheduled for user ${id} on ${date}`;
    }
}