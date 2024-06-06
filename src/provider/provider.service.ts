import { Injectable } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Provider } from './schemas/provider.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProviderService {

  constructor(@InjectModel(Provider.name) private readonly providerModel: Model<Provider>) {}


  create(createProviderDto: CreateProviderDto) {
    const createProvider = new this.providerModel(createProviderDto);
    return createProvider.save()
  }

  async findAll() {
    const providers = await this.providerModel.find().exec();
    return providers;
  }

  async findOne(id: number) {
    const provider =  await this.providerModel.findById(id).exec();
    return provider ? provider.toObject(): null;
  }

  async update(id: number, updateProviderDto: UpdateProviderDto) {
    const updatedProvider = await this.providerModel.findByIdAndUpdate(id, 
      updateProviderDto
    );
    return updatedProvider ? updatedProvider.toObject() : null;
  }

  async remove(id: number) {
    await this.providerModel.findByIdAndDelete(id).exec();
  }
}
