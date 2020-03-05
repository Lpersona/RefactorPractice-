class Movie {
  public static CHILDENS: number = 2;
  public static REGULAR: number = 0;
  public static NEW_RELEASE: number = 1;

  private _title: string;
  private _priceCode: number;

  constructor(title: string, priceCode: number) {
    this._title = title;
    this._priceCode = priceCode;
  }

  public getPriceCode(): number {
    return this._priceCode;
  }

  public getTitle(): string {
    return this._title;
  }

  public setPriceCode(price: number): void {
    this._priceCode = price;
  }
}
