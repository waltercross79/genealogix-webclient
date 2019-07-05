export enum RecordType {
    Birth = 1, Death = 2, Marriage = 3
}

export enum PersonRole {
    Mother=1,  Father=2,  Newborn=3,  Deceased=4,  Witness=5,  
    Godparent=6,  Bride=7,  Groom=8,  Parent=9
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
    persons: PersonInRecord[],
    image: Blob
}

export class RegistryRecord implements Record {
    constructor(recordDate?: Date, recordType?: RecordType, id?: number, 
        number?: string, street?: string, town?: string, country?: string,
        folio?: string, registry?: string, persons?: PersonInRecord[], image?: Blob) {
        this.id = id ? id : 0;
        this.recordDate = recordDate;
        this.recordType = recordType;
        this.number = number ? number : '';
        this.town = town ? town : '';
        this.country = country ? country : '';
        this.street = street ? street : '';
        this.folio = folio ? folio : '';
        this.registry = registry ? registry : '';
        this.persons = persons ? persons : [];
        this.image = image;
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
    persons: PersonInRecord[]; 
    image: Blob;  
}

export class PersonInRecord {
    firstName: string;
    lastName: string;
    id: number;
    role: PersonRole;
    dob: Date;
}

export class RecordThumbnail {  

    private _src: string | ArrayBuffer;

    constructor(public id: number, public thumbnail: Blob, 
        public date: Date, public type: RecordType) {    

        if(this.thumbnail) {
            let that = this;
            let reader = new FileReader();
            reader.readAsDataURL(this.thumbnail);
            reader.onloadend = function() {
                that.src = reader.result;            
            }            
        }
    }  

    public set src(val: string | ArrayBuffer) {
        this._src = val;
    }

    public get src(): string | ArrayBuffer {
        return this._src;
    }
  }