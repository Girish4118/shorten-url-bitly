import { BitlyService } from 'src/bitly/service/bitly.service';
export declare class UserController {
    private readonly bitlyService;
    constructor(bitlyService: BitlyService);
    shortenUrl(longUrl: string): Promise<any>;
    createBitlink(longUrl: string, title: string): Promise<any>;
    customBrandedBitlink(bitlinkId: string, customBitlink: string): Promise<any>;
    getBitlink(bitlinkId: string): Promise<any>;
}
