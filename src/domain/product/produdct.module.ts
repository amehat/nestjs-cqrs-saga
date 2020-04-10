import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { Product } from './entities/product.entity';
import { CommandHandlers } from './commands/handlers';
import { QueriesHandlers } from './queries/handlers';
import { ProductStore } from './stores/product.store';
import { DatabaseModule } from '../../databases/database.module';
import { ProductProvider } from './providers/product.provider';

@Module({
  controllers: [ProductController],
  imports: [
    CqrsModule,
    DatabaseModule,
  ],
  providers: [
    ...CommandHandlers,
    ProductService,
    ...ProductProvider,
    ProductStore,
    ...QueriesHandlers,
  ],
})
export class ProductModule {}
