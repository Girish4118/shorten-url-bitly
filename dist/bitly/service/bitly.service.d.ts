import { HttpService } from '@nestjs/axios';
export declare class BitlyService {
    private readonly http;
    private readonly bitlyConfig;
    constructor(http: HttpService, bitlyConfig: any);
    shortenUrl(longUrl: string): Promise<any>;
    createBitLink(longUrl: string, title: string): Promise<any>;
    getBitlink(bitlinkId: string): Promise<any>;
    customBrandedBitlink(bitlinkId: string, customBitlink: string): Promise<any>;
}
