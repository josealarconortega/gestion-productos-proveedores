import { Module } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierController } from './supplier.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { Supplier, SupplierSchema } from './schemas/supplier.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Supplier.name, schema: SupplierSchema}]) // Configura MongooseModule para incluir el Schema de usuario
  ],
  controllers: [SupplierController],
  providers: [SupplierService],
})
export class SupplierModule {}
