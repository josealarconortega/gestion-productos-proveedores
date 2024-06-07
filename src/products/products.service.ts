import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';
import { EtypeProducts } from './type.products.enum'
import { ProductTypeNotFound } from 'src/common/exceptions/product-not-found';

@Injectable()
export class ProductsService {
  
  constructor(@InjectModel(Product.name) private readonly productModel: Model<Product>) {}

  create(createProductDto: CreateProductDto, createBy) {
    if(!Object.values(EtypeProducts).includes(createProductDto.type as EtypeProducts)) { //PRINCIO, SOLID, 
      throw new ProductTypeNotFound();
    }
    const createProvider = new this.productModel({...createProductDto, createBy});
    return createProvider.save()
  }

  async findAll() {
    const producs = await this.productModel.find().exec();
    return producs;
  }

  async findOne(id: number) {
    const providers =  await this.productModel.findById(id).exec();
    return providers ? providers.toObject(): null;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    if (updateProductDto.type) {
      if(!Object.values(EtypeProducts).includes(updateProductDto.type as EtypeProducts)) { //PRINCIO, SOLID, 
        throw new ProductTypeNotFound();
      }
    }
    const updatedProviders = await this.productModel.findByIdAndUpdate(id, 
      updateProductDto
    );
    return updatedProviders ? updatedProviders.toObject() : null;
  }

  async remove(id: string) {
    console.log(id)
    await this.productModel.findByIdAndDelete(id).exec();
  }
}
