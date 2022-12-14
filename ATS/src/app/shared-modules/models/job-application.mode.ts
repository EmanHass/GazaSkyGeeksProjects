
export interface JobApplication{
    details:{
        id: number,
        jobId: number,
        jobseekerId: number,
        statusId: number,
        createdTime: Date,
        updatedTime: Date
    },
    statusHistories:{
        id: number,
        statusId: number,
        userId: number,
        createdTime: Date
    }
}