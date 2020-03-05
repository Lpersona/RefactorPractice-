class Rental {
  private _movie: Movie;
  private _daysRented: number;

  constructor(movie: Movie, daysRented: number) {
    this._movie = movie;
    this._daysRented = daysRented;
  }

  public getDaysRented(): number {
    return this._daysRented;
  }

  public getMovie(): Movie {
    return this._movie;
  }

  public getCharge(): number {
    let result: number = 0;
    switch (this.getMovie().getPriceCode()) {
      case Movie.REGULAR:
        result += 2;
        if (this.getDaysRented() > 2) {
          result += (this.getDaysRented() - 2) * 1.5;
        }
        break;
      case Movie.NEW_RELEASE:
        result += this.getDaysRented() * 3;
        break;
      case Movie.CHILDENS:
        result += 1.5;
        if (this.getDaysRented() > 3) {
          result += (this.getDaysRented() - 3) * 1.5;
        }
        break;
    }
    return result;
  }
}
