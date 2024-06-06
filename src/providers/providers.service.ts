import { Injectable } from '@nestjs/common';
import { CreateProvidersDto } from './dto/create-providers.dto';
import { UpdateProvidersDto } from './dto/update-providers.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Providers } from './schemas/providers.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProvidersService {

  constructor(@InjectModel(Providers.name) private readonly providersModel: Model<Providers>) {}


  create(createProvidersDto: CreateProvidersDto) {
    const createProviders = new this.providersModel(createProvidersDto);
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
    const updatedProviders = await this.providersModel.findByIdAndUpdate(id, 
      updateProvidersDto
    );
    return updatedProviders ? updatedProviders.toObject() : null;
  }

  async remove(id: number) {
    await this.providersModel.findByIdAndDelete(id).exec();
  }
}
