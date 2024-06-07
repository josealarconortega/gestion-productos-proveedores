import { IsString, IsNotEmpty, Matches } from 'class-validator';
export class CreateProvidersDto {

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly type: string;

}
