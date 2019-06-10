export enum RecordType {
    Birth = 1, Death = 2, Marriage = 3
}

export interface Record {
    id: number,
    recordDate: Date,
    recordType: RecordType
    street: string,
    number: string,
    town: string,
    country: string
    folio: string,
    registry: string    
}