export default class Grocery {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.subTotal = (this.price * this.quantity).toFixed(2);
  }
}
