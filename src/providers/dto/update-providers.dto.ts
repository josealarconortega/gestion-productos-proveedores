import { PartialType } from '@nestjs/swagger';
import { CreateProvidersDto } from './create-providers.dto';

export class UpdateProvidersDto extends PartialType(CreateProvidersDto) {}
