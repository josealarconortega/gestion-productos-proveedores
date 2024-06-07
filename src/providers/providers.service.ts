import { Injectable } from '@nestjs/common';
import { CreateProvidersDto } from './dto/create-provider.dto';
import { UpdateProvidersDto } from './dto/update-provider.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Providers } from './schemas/providers.schema';
import { Model } from 'mongoose';
import { ProductTypeNotFound } from 'src/common/exceptions/product-not-found';

@Injectable()
export class ProvidersService {

  constructor(@InjectModel(Providers.name) private readonly providersModel: Model<Providers>) {}


  create(createProvidersDto: CreateProvidersDto, createBy: string) {
    if(!(createProvidersDto.type == 'mayorista' || createProvidersDto.type == 'minorista')) {
      throw new ProductTypeNotFound();
    }
    const createProviders = new this.providersModel({...createProvidersDto, createBy});
    return createProviders.save()
  }

  async findAll() {
    const providers = await this.providersModel.find().exec();
    return providers;
  }

  async findOne(id: number) {
    const providers =  await this.providersModel.findById(id).exec();
    return providers ? providers.toObject(): null;
  }

  async update(id: number, updateProvidersDto: UpdateProvidersDto) {
    if (updateProvidersDto.type) {
      if(!(updateProvidersDto.type == 'mayorista' || updateProvidersDto.type == 'minorista')) {
        throw new ProductTypeNotFound();
      }
    }
    const updatedProviders = await this.providersModel.findByIdAndUpdate(id, 
      updateProvidersDto
    );
    return updatedProviders ? updatedProviders.toObject() : null;
  }

  async remove(id: number) {
    await this.providersModel.findByIdAndDelete(id).exec();
  }
}
