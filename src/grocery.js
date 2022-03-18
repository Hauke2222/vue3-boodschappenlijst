export default class Grocery {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  get subTotal() {
    return (this.quantity * this.price).toFixed(2);
  }
}
