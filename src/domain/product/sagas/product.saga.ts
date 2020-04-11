
import { Injectable, Logger } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { AddProductToCatalogCommand } from '../../catalog/commands/add-product-to-catalog.command';
import { ProductWasAddedEvent } from '../events/product-was-added.event';

@Injectable()
export class ProductSaga {
  @Saga()
  productWasAdded = (events$: Observable<any>): Observable<ICommand> => {
    return events$
        .pipe(
          ofType(ProductWasAddedEvent),
          delay(1000),
          map(event => {
            Logger.log('saga call AddProductToCatalogCommand');
            return new AddProductToCatalogCommand(event.sku, event.name, event.price, event.currency);
          }),
        );
  }
}
