// src/user/user.controller.ts
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BitlyService } from 'src/bitly/service/bitly.service';

@Controller('user')
export class UserController {
  constructor(private readonly bitlyService: BitlyService) {}

  @Post('shorten-url')
  public async shortenUrl(@Body('longUrl') longUrl: string) {
    console.log('---------short link -----');
    return await this.bitlyService.shortenUrl(longUrl);
  }

  @Post('create-bitlink')
  public async createBitlink(
    @Body('longUrl') longUrl: string,
    @Body('title') title: string
  ) {
    return await this.bitlyService.createBitLink(longUrl, title);
  }

  @Post('custom-branded-bitlink')
  public async customBrandedBitlink(
    @Body('bitlinkId') bitlinkId: string,
    @Body('customBitlink') customBitlink: string
  ) {
    return await this.bitlyService.customBrandedBitlink(
      bitlinkId,
      customBitlink
    );
  }

  @Get('get-bitlink/:id')
  public async getBitlink(@Param('id') bitlinkId: string) {
    console.log('----hello===');
    return await this.bitlyService.getBitlink(bitlinkId);
  }
}
