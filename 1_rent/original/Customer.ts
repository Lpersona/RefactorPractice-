class Customer {
  private _name: string;
  private _rentals: Array<Rental> = [];

  constructor(name: string) {
    this._name = name;
  }

  public addRentals(rental: Rental): void {
    this._rentals.push(rental);
  }

  public getName(): string {
    return this._name;
  }

  public statement(): string {
    let result: string = '';
    let totalAmount: number = 0;
    let frequentRenterPoints = 0;

    for (const rental of this._rentals) {
      let thisAmount: number = 0;
      switch (rental.getMovie().getPriceCode()) {
        case Movie.REGULAR:
          thisAmount += 2;
          if (rental.getDaysRented() > 2) {
            thisAmount += (rental.getDaysRented() - 2) * 1.5;
          }
          break;
        case Movie.NEW_RELEASE:
          thisAmount += rental.getDaysRented() * 3;
          break;
        case Movie.CHILDENS:
          thisAmount += 1.5;
          if (rental.getDaysRented() > 3) {
            thisAmount += (rental.getDaysRented() - 3) * 1.5;
          }
          break;
      }

      frequentRenterPoints++;
      result += `${rental.getMovie().getTitle()}${thisAmount}`;
      totalAmount += thisAmount;
    }

    result += `Amount owed is ${totalAmount}
      You earned ${frequentRenterPoints}
      frequent renter points
    `;

    return result;
  }
}
