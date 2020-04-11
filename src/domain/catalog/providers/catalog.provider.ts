import { Connection } from 'typeorm';

import { Catalog } from '../entities/catalog.entity';

export const CatalogProvider = [
  {
    provide: 'CATALOG_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Catalog),
    inject: ['DATABASE_CONNECTION'],
  }
];
