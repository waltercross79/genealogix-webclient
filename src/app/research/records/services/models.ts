export enum RecordType {
    Birth, Death, Marriage
}

export interface Location {
    street: string,
    number: string,
    town: string,
    country: string
}

export interface Record {
    id: number,
    recordDate: Date,
    recordType: RecordType
    location: Location
    folio: string,
    registry: string    
}