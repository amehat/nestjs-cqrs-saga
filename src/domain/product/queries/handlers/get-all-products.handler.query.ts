import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Repository } from 'typeorm';

import { GetAllProductsQuery } from '../get-all-products.query';
import { ProductStore } from '../../stores/product.store';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../../entities/product.entity';

@QueryHandler(GetAllProductsQuery)
export class GetAllProductHandlerQuery
  implements IQueryHandler<GetAllProductsQuery> {
  public constructor(
    private readonly productStore: ProductStore,
  ) {}

  public async execute(query: GetAllProductsQuery) {
    return await this.productStore.getAllProducts();
  }
}
