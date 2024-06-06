import { Module } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { ProviderController } from './provider.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { Provider, ProviderSchema } from './schemas/provider.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Provider.name, schema: ProviderSchema}]) // Configura MongooseModule para incluir el Schema de usuario
  ],
  controllers: [ProviderController],
  providers: [ProviderService],
})
export class ProviderModule {}
