import { Time } from "@angular/common";
import { Users } from "./users.model";


export interface Interview{
    id: number,
    jobApplicationId: number,
    date: Date,
    time: Time,
    duration: number,
    interviewType: string,
    interviewDetails: string,
    interviewers: Users[]
}