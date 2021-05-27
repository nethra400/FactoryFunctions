function showAddressOf(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
  this.showAddress = function () {
    console.log("address");
  };
}
const obj = new showAddressOf("rajajinagar", "Bnglre", 560044);
const obj1 = new showAddressOf("kuvempu Nagar", "Bnglre", 560044);
const obj3 = obj1;
console.log(obj1 === obj);
console.log(obj1 === obj3);
