// src/app.module.ts
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BitlyModule } from './bitly/bitly.module';

@Module({
  imports: [UserModule, BitlyModule],
})
export class AppModule {}
