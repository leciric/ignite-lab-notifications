import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['brief-sawfish-11927-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'YnJpZWYtc2F3ZmlzaC0xMTkyNyStPeVBRlYpecqDUC7kFm9rZicVswAMd-fmIGg',
          password:
            'GO5vTt8wpF3S1yBiVai55b4_c99zrPVpg6QzCOxceI4pgVvLjl7AKsCnVPRTYpZIyEY9pA==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
