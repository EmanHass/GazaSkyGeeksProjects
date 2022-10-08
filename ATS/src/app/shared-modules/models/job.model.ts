import { Range } from './range.model';


export interface Job{
    id: number,
    title: string,
    sectorId: number,
    functionalAreaId: number,
    countryId: number,
    region: string,
    cityId: number, 
    yeasOfExperience: Range,
    expectedSalary : RadioNodeList,
    jobTypeId: number,
    lowEducationLevelId: number,
    highEducationLevelId: number,
    nationalityId: number,
    languagesId:[],
    skillsId:[],
    description: string,
    requirements: string,
    benefitsID: [] 
}