import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetBySkuProductQuery } from '../get-by-sku-product.query';
import { ProductStore } from '../../stores/product.store';
import { Product } from '../../entities/product.entity';

@QueryHandler(GetBySkuProductQuery)
export class GetBySkuProductHandlerQuery
  implements IQueryHandler<GetBySkuProductQuery> {
  public constructor(private readonly productStore: ProductStore) {}

  public async execute(query: GetBySkuProductQuery): Promise<Product | Error> {
    try {
      const { sku } = query;
      const product = this.productStore.getProductBySku(sku);
      if (product instanceof Error) {
        throw product;
      }
      return product;
    } catch (e) {
      return new Error(e);
    }
  }
}
