// src/bitly/bitly.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BitlyConfig, BitlyConfigModule } from './config/bitly.config';
import { BitlyService } from './service/bitly.service';

@Module({
  imports: [HttpModule, BitlyConfigModule],
  providers: [BitlyService, BitlyConfig],
  exports: [BitlyService],
})
export class BitlyModule {}
