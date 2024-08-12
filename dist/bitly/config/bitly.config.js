"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitlyConfigModule = exports.BitlyConfig = void 0;
const config_1 = require("@nestjs/config");
exports.BitlyConfig = {
    provide: 'BITLY_CONFIG',
    useFactory: (configService) => ({
        accessToken: configService.get('BITLY_ACCESS_TOKEN'),
        domain: configService.get('BITLY_DOMAIN', 'bit.ly'),
        groupGuid: configService.get('BITLY_GROUP_GUID'),
    }),
    inject: [config_1.ConfigService],
};
exports.BitlyConfigModule = config_1.ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
});
//# sourceMappingURL=bitly.config.js.map