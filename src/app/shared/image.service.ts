import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  defaultRecordBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
  recordBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

  constructor() { }

  getDefaultImage64(): string {
    return this.defaultRecordBase64;
  }

  getImage64(data: Blob): Promise<string> {
    let fr = new FileReader();
    return new Promise<string>((resolve, reject) => {
      fr.onerror = () => {
        fr.abort();
        reject(new DOMException("Problem parsing input data."));
      };
      fr.onloadend = () => {
        resolve((fr.result as string).replace(/data:.*;base64,/g, ''));
      };
      fr.readAsDataURL(data);
    });
  }

  getDefaultImage(): Blob {
    return this.getImageBlob(this.recordBase64);
  }

  getImageBlob(b64Data: string): Blob {
    let byteChars = atob(b64Data);
    let byteNums =new Array(byteChars.length);
    for (let i = 0; i < byteChars.length; i++) {
      byteNums[i] = byteChars.charCodeAt(i);
    }
    let byteArray = new Uint8Array(byteNums);
    return new Blob([byteArray]);
  }


}
