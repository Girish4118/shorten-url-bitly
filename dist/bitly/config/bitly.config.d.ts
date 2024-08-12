import { ConfigService } from '@nestjs/config';
export declare const BitlyConfig: {
    provide: string;
    useFactory: (configService: ConfigService) => {
        accessToken: string;
        domain: string;
        groupGuid: string;
    };
    inject: (typeof ConfigService)[];
};
export declare const BitlyConfigModule: import("@nestjs/common").DynamicModule;
