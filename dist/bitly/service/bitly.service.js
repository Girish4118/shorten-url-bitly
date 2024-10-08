"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitlyService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let BitlyService = class BitlyService {
    constructor(http, bitlyConfig) {
        this.http = http;
        this.bitlyConfig = bitlyConfig;
    }
    async shortenUrl(longUrl) {
        const payload = {
            long_url: longUrl,
            domain: this.bitlyConfig.domain,
        };
        return (await (0, rxjs_1.firstValueFrom)(this.http.post('/v4/shorten', payload, {
            headers: { Authorization: `Bearer ${this.bitlyConfig.accessToken}` },
        }))).data;
    }
    async createBitLink(longUrl, title) {
        const payload = {
            long_url: longUrl,
            domain: this.bitlyConfig.domain,
            group_guid: this.bitlyConfig.groupGuid,
            title: title,
        };
        return (await (0, rxjs_1.firstValueFrom)(this.http.post('/v4/bitlinks', payload, {
            headers: { Authorization: `Bearer ${this.bitlyConfig.accessToken}` },
        }))).data;
    }
    async getBitlink(bitlinkId) {
        console.log(bitlinkId);
        console.log(this.bitlyConfig.accessToken);
        let bitlink = 'dagbfsdfto4ejtre';
        return (await (0, rxjs_1.firstValueFrom)(this.http.get(`/v4/bitlinks/${bitlink}`, {
            headers: { Authorization: `Bearer ${this.bitlyConfig.accessToken}` },
        }))).data;
    }
    async customBrandedBitlink(bitlinkId, customBitlink) {
        const payload = {
            custom_bitlink: customBitlink,
            bitlink_id: bitlinkId,
        };
        return (await (0, rxjs_1.firstValueFrom)(this.http.post('/v4/custom_bitlinks', payload, {
            headers: { Authorization: `Bearer ${this.bitlyConfig.accessToken}` },
        }))).data;
    }
};
exports.BitlyService = BitlyService;
exports.BitlyService = BitlyService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)('BITLY_CONFIG')),
    __metadata("design:paramtypes", [axios_1.HttpService, Object])
], BitlyService);
//# sourceMappingURL=bitly.service.js.map