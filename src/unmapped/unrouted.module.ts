import { Module } from '@nestjs/common';
import { UnmappedController } from './unmapped.controller';

@Module({ controllers: [UnmappedController] })
export class UnroutedModule {}
