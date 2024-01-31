import { Module } from '@nestjs/common';
import { MappedController } from './mapped.controller';

@Module({ controllers: [MappedController] })
export class MappedModule {}
