import { HttpException, HttpStatus } from "@nestjs/common";

export class ProductTypeNotFound extends HttpException {

  constructor() {
    super('El tipo debe ser mayorista o minorista', HttpStatus.BAD_REQUEST)
  }
}