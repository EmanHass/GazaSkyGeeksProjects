
export interface JobApplication{
    details:{
        id: number,
        jobId: number,
        jobseekerId: number,
        statusId: number,
        createdTime: number,
        updatedTime: number
    },
    statusHistories:{
        id: number,
        statusId: number,
        userId: number,
        createdTime: number,
    }
}