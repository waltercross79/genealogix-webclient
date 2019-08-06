import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ImageFile } from '../research/records/services/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  defaultRecordBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
  recordBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

  constructor(private http: HttpClient) { }

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

  saveImage(image: ImageFile, id: number) {
    var body = new HttpParams()
      .set('record_id', id.toString())
      .set('file_name', image.fileName)
      .set('image', image.imageb64);
    return this.http.post<void>(environment.imageApiUrl + 'images/',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      });   
  }
}
