let totalPrice = 300;
let finalPrice = 0;

if (totalPrice >= 500) {
  finalPrice = totalPrice - (10 / 100) * totalPrice;
  console.log(`Final price: ${finalPrice} MAD`);
} else {
  console.log(`Final price: ${totalPrice} MAD`);
}
