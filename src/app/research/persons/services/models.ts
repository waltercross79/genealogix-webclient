export interface Person {
    firstName: string,
    lastName: string,
    middleName: string,
    gender: string,
    dateOfBirth: Date,
    dateOfDeath: Date,
    id: number, 
    marriages: Marriage[],
    parents: Person[]
}

export interface Marriage {
    spouse: Person
    children: Person[]
}