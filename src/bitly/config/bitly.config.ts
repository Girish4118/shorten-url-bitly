import { ConfigModule, ConfigService } from '@nestjs/config';

export const BitlyConfig = {
  provide: 'BITLY_CONFIG',
  useFactory: (configService: ConfigService) => ({
    accessToken: configService.get<string>('BITLY_ACCESS_TOKEN'),
    domain: configService.get<string>('BITLY_DOMAIN', 'bit.ly'),
    groupGuid: configService.get<string>('BITLY_GROUP_GUID'),
  }),
  inject: [ConfigService],
};

export const BitlyConfigModule = ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: '.env',
});
