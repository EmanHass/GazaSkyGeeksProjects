import { Address } from "./address.model"
import { Contact } from "./contact.model"
import { Job } from "./job.model"
import { Users } from "./users.model"

export interface Company{
    info:{
        id: number,
        name: string,
        logoImage: string,
        coverImage: string
    },
    ownerUser: Users,
    users: Users[],
    contact: Contact,
    address: Address,
    jobs: Job[]
}