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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const bitly_service_1 = require("../../bitly/service/bitly.service");
let UserController = class UserController {
    constructor(bitlyService) {
        this.bitlyService = bitlyService;
    }
    async shortenUrl(longUrl) {
        console.log('---------short link -----');
        return await this.bitlyService.shortenUrl(longUrl);
    }
    async createBitlink(longUrl, title) {
        return await this.bitlyService.createBitLink(longUrl, title);
    }
    async customBrandedBitlink(bitlinkId, customBitlink) {
        return await this.bitlyService.customBrandedBitlink(bitlinkId, customBitlink);
    }
    async getBitlink(bitlinkId) {
        console.log('----hello===');
        return await this.bitlyService.getBitlink(bitlinkId);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)('shorten-url'),
    __param(0, (0, common_1.Body)('longUrl')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "shortenUrl", null);
__decorate([
    (0, common_1.Post)('create-bitlink'),
    __param(0, (0, common_1.Body)('longUrl')),
    __param(1, (0, common_1.Body)('title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createBitlink", null);
__decorate([
    (0, common_1.Post)('custom-branded-bitlink'),
    __param(0, (0, common_1.Body)('bitlinkId')),
    __param(1, (0, common_1.Body)('customBitlink')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "customBrandedBitlink", null);
__decorate([
    (0, common_1.Get)('get-bitlink/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getBitlink", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [bitly_service_1.BitlyService])
], UserController);
//# sourceMappingURL=user.controller.js.map