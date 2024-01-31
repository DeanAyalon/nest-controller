import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MappedModule } from './mapped/mapped.module';
import { UnroutedModule } from './unmapped/unrouted.module';

@Module({
  imports: [
    UnroutedModule,   // The Controller, decorated by @log(), does not get mapped.                              See: ./unmapped/unmapped.controller.ts
    MappedModule,     // The Controller, undecorated by @log(), gets mapped, but some routes inside it do not.  See: ./mapped/mapped.controller.ts
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
