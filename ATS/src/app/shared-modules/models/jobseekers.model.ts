import { Experience } from './experience.model';
import { Address } from './address.model';
import { Contact } from "./contact.model";
import { Education } from './education.model';
import { Users } from "./users.model";
import { Skills } from './skills.model';
import { Languages } from './Languages.model';


export interface Jobseekers{
    user: Users,
    contact: Contact,
    address: Address,
    educations: Education[],
    experiences:Experience[],
    skills: Skills[],
    languages: Languages[]
}