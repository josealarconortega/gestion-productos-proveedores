import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { SupplierModule } from './supplier/supplier.module';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true, // hace que el modulo de configuración sea global, es accesible en cualquier módulo sin necesidad de importalo nuevamente
  }),
  MongooseModule.forRoot('mongodb://localhost/productos-proveedores'),
  UsersModule,
  AuthModule,
  SupplierModule,],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
