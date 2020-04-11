import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './domain/product/produdct.module';
import { CatalogModule } from './domain/catalog/catalog.module';
import { DatabaseModule } from './databases/database.module';
import { DatabaseProvider } from './databases/database.provider';

@Module({
  imports: [
    DatabaseModule,
    CatalogModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService, ...DatabaseProvider],
  exports: [...DatabaseProvider],
})
export class AppModule {}
