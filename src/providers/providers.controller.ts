import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { CreateProvidersDto } from './dto/create-provider.dto';
import { UpdateProvidersDto } from './dto/update-provider.dto';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { Auth } from 'src/auth/auth.decorator';

@UseGuards(JwtAuthGuard)
@Controller('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}
  
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createProvidersDto: CreateProvidersDto, @Auth() { userId }) {
    return this.providersService.create(createProvidersDto, userId);
  }

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
