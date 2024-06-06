import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersController } from './providers.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { Providers, ProvidersSchema } from './schemas/providers.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Providers.name, schema: ProvidersSchema}]) // Configura MongooseModule para incluir el Schema de usuario
  ],
  controllers: [ProvidersController],
  providers: [ProvidersService],
})
export class ProvidersModule {}
