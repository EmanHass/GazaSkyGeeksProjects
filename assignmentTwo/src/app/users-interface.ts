export interface User {
    id: string;
    name: {
      firstName: string;
      lastName: string;
    };
    birthDate: string;
    email: string;
    phone: string;
    address: string;
}
