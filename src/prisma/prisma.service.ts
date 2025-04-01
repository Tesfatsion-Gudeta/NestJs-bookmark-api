import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://nestjs_user:123@localhost:5432/nestjs_db?schema=public',
        },
      },
    });
  }
}
