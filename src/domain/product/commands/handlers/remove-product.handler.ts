import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { RemoveProductCommand } from '../remove-product.command';
import { ProductStore } from '../../stores/product.store';
import { Product } from '../../entities/product.entity';

@CommandHandler(RemoveProductCommand)
export class RemoveProductHandler
  implements ICommandHandler<RemoveProductCommand> {
  public constructor(private readonly productStore: ProductStore) {}
  execute(command: RemoveProductCommand): Promise<Product | Error> {
    try {
        const { sku } = command;
        const product =  this.productStore.removeProduct(sku);
        if (product instanceof Error) {
          throw product;
        }

        return product;
    } catch (e) {
      Logger.error(e, 'RemoveProductHandler.execute() Error Handler: ');
      return e;
    }
  }
}
