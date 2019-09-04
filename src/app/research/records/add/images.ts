/*
** Stores images' data URLs in a temporary array.
** Provides methods to access just the image data in base64 string without the URL portion.
** Handles most common image types supported by the application - PNG, JPG, BMP, GIF.
*/
class Images {    
    constructor(private urls: string[]) {        
    }

    getUrl(index: number): string {
        return this.urls[index];
    }

    getBase64Image(index: number): string {
        // TODO: test that this handles different file formats.
        return this.urls[index].replace(/data:.*;base64,/g, '');
    }

    push(url: string) {
        this.urls.push(url);
    }

    getAllUrls(): string[] {
        return this.urls;
    }

    //getAllImages(): 
}
