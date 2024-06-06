import { IsString, IsNotEmpty, Matches } from 'class-validator';
export class CreateSupplierDto {

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/mayorista|minorista/i)
  readonly type: string;

}
