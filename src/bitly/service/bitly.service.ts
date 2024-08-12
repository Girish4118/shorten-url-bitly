// src/bitly/bitly.service.ts
import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class BitlyService {
  constructor(
    private readonly http: HttpService,
    @Inject('BITLY_CONFIG') private readonly bitlyConfig: any
  ) {}

  public async shortenUrl(longUrl: string): Promise<any> {
    const payload = {
      long_url: longUrl,
      domain: this.bitlyConfig.domain,
    };
    return (
      await firstValueFrom(
        this.http.post('/v4/shorten', payload, {
          headers: { Authorization: `Bearer ${this.bitlyConfig.accessToken}` },
        })
      )
    ).data;
  }

  public async createBitLink(longUrl: string, title: string): Promise<any> {
    const payload = {
      long_url: longUrl,
      domain: this.bitlyConfig.domain,
      group_guid: this.bitlyConfig.groupGuid,
      title: title,
    };
    return (
      await firstValueFrom(
        this.http.post('/v4/bitlinks', payload, {
          headers: { Authorization: `Bearer ${this.bitlyConfig.accessToken}` },
        })
      )
    ).data;
  }

  public async getBitlink(bitlinkId: string): Promise<any> {
    console.log(bitlinkId);
    console.log(this.bitlyConfig.accessToken);
    let bitlink = 'dagbfsdfto4ejtre';
    return (
      await firstValueFrom(
        this.http.get(`/v4/bitlinks/${bitlink}`, {
          headers: { Authorization: `Bearer ${this.bitlyConfig.accessToken}` },
        })
      )
    ).data;
  }

  //   public async createBrandedShortDomain(bitlink: BrandedShortDomain): Promise<BitlinkResponse> {
  //     const bsdPayload: BitlinkRequest = {
  //       title: bitlink.title,
  //       long_url: bitlink.longUrl,
  //       tags: bitlink.tags || [],
  //       domain: this.config.getOrThrow('BITLY_DOMAIN'),
  //       group_guid: this.config.getOrThrow('BITLY_GROUP_GUID'),
  //     };
  //     return (await firstValueFrom(this.http.post('/v4/bitlinks', bsdPayload))).data;
  //   }

  public async customBrandedBitlink(
    bitlinkId: string,
    customBitlink: string
  ): Promise<any> {
    const payload = {
      custom_bitlink: customBitlink,
      bitlink_id: bitlinkId,
    };
    return (
      await firstValueFrom(
        this.http.post('/v4/custom_bitlinks', payload, {
          headers: { Authorization: `Bearer ${this.bitlyConfig.accessToken}` },
        })
      )
    ).data;
  }
}
