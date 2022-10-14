import { Address } from "./address.model"
import { Contact } from "./contact.model"
import { Job } from "./job.model"
import { User } from "./user.model"

export interface Company{
    info:{
        id: number,
        name: string,
        logoImage: string,
        coverImage: string
    },
    ownerUser: User,
    users: User[],
    contact: Contact,
    address: Address,
    jobs: Job[]
}