import { InterviewType } from './enums/interview-type.enum';
import { Time } from "@angular/common";
import { User } from "./user.model";


export interface Interview{
    id: number,
    jobApplicationId: number,
    date: Date,
    time: Time,
    duration: number,
    interviewType: InterviewType,
    interviewDetails: string,
    interviewers: User[]
}