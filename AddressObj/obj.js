
const addObj={
    street:'jayanagar',
    city:'blr',
    zipCode:560041,
    showAddress:function(addObj){
        console.log(addObj);
    }

}
console.log(addObj);
addObj.showAddress(addObj);
