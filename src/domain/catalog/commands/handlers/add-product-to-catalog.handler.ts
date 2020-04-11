import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { AddProductToCatalogCommand } from '../add-product-to-catalog.command';
import { CatalogStore } from '../../stores/catalog.store';
import { Catalog } from '../../entities/catalog.entity';
import { Logger } from '@nestjs/common';

@CommandHandler(AddProductToCatalogCommand)
export class AddProductToCatalogHandler implements ICommandHandler<AddProductToCatalogCommand> {
    public constructor(private readonly catalogStore: CatalogStore) {}

    public async execute(command: AddProductToCatalogCommand): Promise<Catalog> {
        Logger.log('add product to catalog domain called');
        const { sku, name, price, currency } = command;
        const catalogEntity = new Catalog();
        catalogEntity.sku = sku;
        catalogEntity.name = name;
        catalogEntity.price = price;
        catalogEntity.currency = currency;

        await this.catalogStore.register(catalogEntity);

        return catalogEntity;
    }
}
