import { Range } from './range.model';


export interface Job{
    id: number,
    title: string,
    sectorId: number,
    functionalAreaId: number,
    countryId: number,
    cityId: number, 
    yeasOfExperience: Range,
    expectedSalary : Range,
    jobTypeId: number,
    lowEducationLevelId: number,
    highEducationLevelId: number,
    nationalityId: number,
    languageIds:number[],
    skillIds:number[],
    description: string,
    requirements: string,
    benefitIds: number[] 
}