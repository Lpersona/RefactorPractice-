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
      let thisAmount: number = this._amountFor(rental);

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

  private _amountFor(rental: Rental) {
    return rental.getCharge();
  }
}
