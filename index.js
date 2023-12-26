var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

console.log(customerName);

function setBestCustomer() {
  bestCustomer = "not bob";
}

// console.log(bestCustomer);

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "andy";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "hamish";
  console.log(leastFavoriteCustomer);
}
