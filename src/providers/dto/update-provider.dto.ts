import { PartialType } from '@nestjs/swagger';
import { CreateProvidersDto } from './create-provider.dto';

export class UpdateProvidersDto extends PartialType(CreateProvidersDto) {}
