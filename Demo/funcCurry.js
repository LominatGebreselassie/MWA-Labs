function multiply(a,b){
    return a*b;
}

var multiplyByTwo = multiply.bind({},2);
console.log(multiplyByTwo(4));
var multiplyByThree = multiply.bind({},3);
console.log(multiplyByTwo(4));