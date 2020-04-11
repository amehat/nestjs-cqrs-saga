export class AddProductToCatalogCommand {
  public constructor(
    public readonly name: string,
    public readonly sku: string,
    public readonly price: number,
    public readonly currency: string,
  ) {}
}
