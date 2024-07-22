import { Module } from '@nestjs/common';
import { PrismaRepository } from '../repository/prisma.repository';

@Module({
  providers: [PrismaRepository],
  exports: [PrismaRepository],
})
export class PrismaModule {}
