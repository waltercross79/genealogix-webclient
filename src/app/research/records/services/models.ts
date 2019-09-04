import { SafeResourceUrl } from '@angular/platform-browser';

export class ModelBase {
    getDatePart(date: Date): Date {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }
}

export enum RecordType {
    Birth = 1, Death = 2, Marriage = 3
}

export enum PersonRole {
    Mother=1,  Father=2,  Newborn=3,  Deceased=4,  Witness=5,  
    Godparent=6,  Bride=7,  Groom=8,  Parent=9
}

export interface Record {
    id: string,
    recordDate: Date,
    recordType: RecordType
    street: string,
    number: string,
    town: string,
    country: string
    folio: string,
    registry: string  
    persons: PersonInRecord[],
    image: ImageFile,
    imageIdentifiers: string[]
}

export class RegistryRecord extends ModelBase implements Record {
    constructor(recordDate?: Date, recordType?: RecordType, id?: string, 
        number?: string, street?: string, town?: string, country?: string,
        folio?: string, registry?: string, persons?: PersonInRecord[], image?: ImageFile,
        imageIdentifiers? : string[]) {
            super();

            this.id = id ? id : '';
            this.recordDate = recordDate ? this.getDatePart(recordDate) : null;
            this.recordType = recordType;
            this.number = number ? number : '';
            this.town = town ? town : '';
            this.country = country ? country : '';
            this.street = street ? street : '';
            this.folio = folio ? folio : '';
            this.registry = registry ? registry : '';
            this.persons = persons ? persons : [];
            this.image = image;
            this.imageIdentifiers = imageIdentifiers ? imageIdentifiers : [];
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
        result.persons = record.persons ? record.persons : [];    
        result.image = record.image;    
        result.imageIdentifiers = record.imageIdentifiers ? record.imageIdentifiers : [];

        return result;
    }

    id: string;    
    recordDate: Date;
    recordType: RecordType;
    street: string;
    number: string;
    town: string;
    country: string;
    folio: string;
    registry: string; 
    persons: PersonInRecord[]; 
    image: ImageFile;  
    imageIdentifiers: string[]
}

export class ImageFile {
    constructor(fileName: string, image: string) {
        this.fileName = fileName;
        this.imageb64 = image;
    }

    fileName: string;
    imageb64: string;
}

export class PersonInRecord extends ModelBase {
    firstName: string;
    lastName: string;
    id: number;
    role: PersonRole;
    dob: Date;

    constructor(role: PersonRole, firstName: string, lastName: string, 
        id?: number, dob?: Date) {
        super();

        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.dob = dob ? this.getDatePart(dob) : null;
        this.role = role;
        this.id = id;
    }
}

export class RecordThumbnail {  

    private _safeUrl: SafeResourceUrl;
    
    constructor(public id: number, public thumbnail: Blob, 
        public date: Date, public type: RecordType) {            
    }  

    public get src(): Promise<string> {
        let reader = new FileReader();
        let result = new Promise<string>((resolve, reject) => {
            reader.onerror = () => {
                reader.abort();
                reject(new DOMException("Error reading thumbnail data."));
            };

            reader.onloadend = () => {
                resolve((reader.result as string));
            }
        });
        reader.readAsDataURL(this.thumbnail);

        return result;
    }

    public set safeUrl(value: SafeResourceUrl) {
        this._safeUrl = value;
    }

    public get safeUrl(): SafeResourceUrl {
        return this._safeUrl;
    }
  }