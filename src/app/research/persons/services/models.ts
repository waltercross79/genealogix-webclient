export interface Person {
    firstName: string,
    lastName: string,
    middleName: string,
    gender: string,
    dateOfBirth: Date,
    dateOfDeath: Date,
    id: number
}

export interface FullyLoadedPerson extends Person {
    marriages: Marriage[]    
    siblings: FullyLoadedPerson[]
}

export interface Marriage {
    spouse: Person
    children: FullyLoadedPerson[]
}