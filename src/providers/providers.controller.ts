import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { CreateProvidersDto } from './dto/create-providers.dto';
import { UpdateProvidersDto } from './dto/update-providers.dto';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

@Controller('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Post()
  create(@Body() createProvidersDto: CreateProvidersDto) {
    return this.providersService.create(createProvidersDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.providersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.providersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProvidersDto: UpdateProvidersDto) {
    return this.providersService.update(+id, updateProvidersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.providersService.remove(+id);
  }
}
