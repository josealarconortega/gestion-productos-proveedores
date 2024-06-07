import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from "src/users/schemas/user.schema";

@Schema()
export class Products extends Document {
  @Prop({required: true })
  name: string;

  @Prop({required: true})
  type: string;
  
  @Prop({default: Date.now })
  createAt: Date;
  @Prop({type: String, ref: 'User', required: true})
  createBy: User;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);

// Este UserSchema puede ser utilziado para definir un modelo de Mongoose
// que nos permita iteractuar con la base de datos 
