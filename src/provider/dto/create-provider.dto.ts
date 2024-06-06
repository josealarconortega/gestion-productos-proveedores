import { IsString, IsNotEmpty, Matches } from 'class-validator';
export class CreateProviderDto {

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/mayorista|minorista/i)
  readonly type: string;

}
