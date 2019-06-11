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

export class RegistryRecord implements Record {
    constructor(recordDate: Date, recordType: RecordType, id?: number, 
        number?: string, street?: string, town?: string, country?: string,
        folio?: string, registry?: string) {
        this.id = id ? id : 0;
        this.recordDate = recordDate;
        this.recordType = recordType;
        this.number = number ? number : '';
        this.town = town ? town : '';
        this.country = country ? country : '';
        this.street = street ? street : '';
        this.folio = folio ? folio : '';
        this.registry = registry ? registry : '';
    }    

    static create(record: Record): RegistryRecord {
        let result = new RegistryRecord(record.recordDate, record.recordType);

        result.id = record.id;
        result.number = record.number;
        result.street = record.street;
        result.country = record.country;
        result.town = record.town;
        result.folio = record.folio;
        result.registry = record.registry;

        return result;
    }

    id: number;    
    recordDate: Date;
    recordType: RecordType;
    street: string;
    number: string;
    town: string;
    country: string;
    folio: string;
    registry: string;    
}