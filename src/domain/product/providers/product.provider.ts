import { Connection, Repository } from 'typeorm';

import { Product } from '../entities/product.entity';

export const ProductProvider = [
  {
      provide: 'PRODUCT_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(Product),
      inject: ['DATABASE_CONNECTION'],
  }
];
