import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { DatabaseModule } from '../../databases/database.module';
import { AddProductToCatalogHandler } from './commands/handlers/add-product-to-catalog.handler'
import { CatalogStore } from './stores/catalog.store';
import { CatalogProvider } from './providers/catalog.provider';

@Module({
    imports: [
        CqrsModule,
        DatabaseModule,
    ],
    providers: [
        AddProductToCatalogHandler,
        CatalogStore,
        ...CatalogProvider,
    ],
})
export class CatalogModule {}
