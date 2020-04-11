import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Catalog } from '../entities/catalog.entity';


@Injectable()
export class CatalogStore {
  public constructor(
    @Inject('CATALOG_REPOSITORY')
    private catalogRepository: Repository<Catalog>,
  ) {}

  public async getAllCatalog(): Promise<Catalog[]> {
    return await this.catalogRepository.find();
  }

  public async getCatalogBySku(sku: string): Promise<Catalog> {
    return await this.catalogRepository.findOne({ sku });
  }

  public async register(
    catalogEntity: Catalog,
    sku?: string,
  ): Promise<Catalog | Error> {
    if (sku) {
      return await this.update(catalogEntity, sku);
    } else {
      return await this.create(catalogEntity);
    }
  }

  private async create(catalogEntity: Catalog): Promise<Catalog | Error> {
    try {
      const catalog = this.catalogRepository.create(catalogEntity);
      return await this.catalogRepository.save(catalog);
    } catch (e) {
      return new Error(e);
    }
  }

  private async update(
    catalogEntity: Catalog,
    sku: string,
  ): Promise<Catalog | Error> {
    try {
      await this.catalogRepository.update({ sku }, catalogEntity);
      return this.catalogRepository.findOne({ sku });
    } catch (e) {
      return new Error(e);
    }
  }

  public async removeCatalog(sku: string): Promise<Catalog | Error> {
    try {
      const catalog = this.catalogRepository.findOne({ sku });
      await this.catalogRepository.delete({ sku });

      return catalog;
    } catch (e) {
      return new Error(e);
    }
  }
}
