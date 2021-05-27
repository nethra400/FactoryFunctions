const addObj = {
  street: "jayanagar",
  city: "blr",
  zipCode: 560041,
  showAddress: function (addObj) {
    console.log(addObj);
  },
};

//Factory function
function showAddressOf(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
    showAddress1() {
      console.log("view address");
    },
  };
}
const address1=showAddressOf("kuvempu nagar", "bnglre", 564921);
const address2=showAddressOf("coffee board", "coorg", 564021);
const address3=showAddressOf("jayanagar", "chennai", 564933);
console.log(address1)
console.log(address2)
console.log(address3)

//Constructor Function
function showAddressOf(street, city, zipCode){
    this.street=street;
    this.city=city;
    this.zipCode=zipCode;
    this.showAddress=function(){
        console.log(showAddressOf);
    }
}
const obj = new showAddressOf('rajajinagar','Bnglre',560044);
console.log(obj);