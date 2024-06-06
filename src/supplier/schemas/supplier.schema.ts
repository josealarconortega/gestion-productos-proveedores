import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Supplier extends Document {
  @Prop({required: true })
  name: string;
  @Prop({required: true}) // Asegura que el email sea unico
  type: string;
}

export const SupplierSchema = SchemaFactory.createForClass(Supplier);

// Este UserSchema puede ser utilziado para definir un modelo de Mongoose
// que nos permita iteractuar con la base de datos 
