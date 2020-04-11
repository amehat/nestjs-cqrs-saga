import { Logger } from '@nestjs/common';

export class ProductWasAddedEvent {
  public constructor(
    public readonly name: string,
    public readonly sku: string,
    public readonly price: number,
    public readonly currency: string,
  ) {
    Logger.log('ProductWasAddedEvent called');
  }
}
