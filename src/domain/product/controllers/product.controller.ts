import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';

import { ProductService } from '../services/product.service';
import { ProductRegistrationDto } from '../dto/product-registration.dto';
import { ProductModificationDto } from '../dto/product-modification.dto';
import { Product } from '../entities/product.entity';

@Controller('product')
export class ProductController {
  public constructor(private readonly productService: ProductService) {}

  @Get()
  public getAll(): Promise<Product[] | Error> {
    return this.productService.getAll();
  }

  @Get(':sku')
  public getBySku(@Param('sku') sku: string): Promise<Product | Error> {
    return this.productService.getBySku(sku);
  }

  @Post()
  public productRegistration(
    @Body() productRegistrationDto: ProductRegistrationDto,
  ): Promise<Product | Error> {
    const { name, sku, price, currency } = productRegistrationDto;
    return this.productService.productRegistration(name, sku, price, currency);
  }

  @Put(':sku')
  public productModification(
    @Body() productModificationDto: ProductModificationDto,
    @Param('sku') sku: string,
  ): Promise<Product | Error> {
    const { name, price, currency } = productModificationDto;
    return this.productService.productModification(name, sku, price, currency);
  }

  @Delete(':sku')
  public async delete(@Param('sku') sku: string): Promise<Product | Error> {
    return this.productService.removeProduct(sku);
  }
}
