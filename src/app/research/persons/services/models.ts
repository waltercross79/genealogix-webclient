export interface Person {
    firstName: string,
    lastName: string,
    middleName: string,
    gender: string,
    dateOfBirth: Date,
    dateOfDeath: Date,
    id: number, 
    marriages: Marriage[]
}

export interface Marriage {
    spouse: Person
    children: Person[]
}