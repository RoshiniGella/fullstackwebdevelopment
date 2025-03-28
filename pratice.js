const arr = [1, 2, 3];
const [first, second, third] = arr;
//console.log(first);
const obj = {
    employee: "roshi",
    employeeId: 1,
    employeeSalary: 5000,
    address: "kodad"
};
const { employee, employeeId, employeeSalary, address } = obj;
//console.log(employeeId);
const arr2 = ["hello", 2, 3, 4, 5];
const [firststring, ...remaining] = arr2;
//console.log(firststring);
//console.log(remaining);
function displayNames(...a) {
    console.log(`the names are:${a}`);
}
//displayNames("Roshini","sai","harini","hasini");
const arr3 = ["a", "b", "c"];
const arr4 = [...arr3];
arr3.push("d");
//console.log(arr3);
//console.log(arr4);
const car1 = { name: "bmw", price: "1 cr" };
const car2 = { color: "white", enginecc: 5000 }
const car = { ...car1, ...car2 };
//console.log(car);
function square(val){
    return val*val
}
function cube(val){
    return val*val*val
}

function sumofSquares(val1,val2){
    let firstValue = square(val1);
    let secondValue = square(val2); 
    return firstValue + secondValue
}
function sumofCubes(val1,val2){
    let firstValue = cube(val1);
    let secondValue = cube(val2); 
    return firstValue + secondValue
}

function sumOfSomething(val1,val2,callbackFn){
    let firstValue = callbackFn(val1);
    let secondValue = callbackFn(val2); 
    return firstValue + secondValue
}

const ans = sumOfSomething(2,3,cube)
console.log(ans);
setInterval(()=>console.log("hello Everyone"), 3000)
