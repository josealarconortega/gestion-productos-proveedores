import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Supplier } from './schemas/supplier.schema';
import { Model } from 'mongoose';

@Injectable()
export class SupplierService {

  constructor(@InjectModel(Supplier.name) private readonly supplierModel: Model<Supplier>) {}


  create(createSupplierDto: CreateSupplierDto) {
    const createSupplier = new this.supplierModel(createSupplierDto);
    return createSupplier.save()
  }

  async findAll() {
    const suppliers = await this.supplierModel.find().exec();
    return suppliers;
  }

  async findOne(id: number) {
    const supplier =  await this.supplierModel.findById(id).exec();
    return supplier ? supplier.toObject(): null;
  }

  async update(id: number, updateSupplierDto: UpdateSupplierDto) {
    const updatedSupplier = await this.supplierModel.findByIdAndUpdate(id, 
      updateSupplierDto
    );
    return updatedSupplier ? updatedSupplier.toObject() : null;
  }

  async remove(id: number) {
    await this.supplierModel.findByIdAndDelete(id).exec();
  }
}
