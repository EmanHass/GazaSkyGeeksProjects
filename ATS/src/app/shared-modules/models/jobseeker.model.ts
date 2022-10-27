import { Experience } from './experience.model';
import { Address } from './address.model';
import { Contact } from "./contact.model";
import { Education } from './education.model';
import { User } from "./user.model";
import { Skill } from './skill.model';
import { Language } from './language.model';


export interface Jobseeker{
    // user: User,
    contact: Contact,
    address: Address,
    educations: Education[],
    experiences:Experience[],
    // skills: Skill[],
    // languages: Language[]
}