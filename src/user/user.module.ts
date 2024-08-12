// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { BitlyModule } from '../bitly/bitly.module';
import { UserController } from './controller/user.controller';

@Module({
  imports: [BitlyModule],
  controllers: [UserController],
})
export class UserModule {}
