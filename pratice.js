// const arr = [1, 2, 3];
// const [first, second, third] = arr;
// //console.log(first);
// const obj = {
//     employee: "roshi",
//     employeeId: 1,
//     employeeSalary: 5000,
//     address: "kodad"
// };
// const { employee, employeeId, employeeSalary, address } = obj;
// //console.log(employeeId);
// const arr2 = ["hello", 2, 3, 4, 5];
// const [firststring, ...remaining] = arr2;
// //console.log(firststring);
// //console.log(remaining);
// function displayNames(...a) {
//     console.log(`the names are:${a}`);
// }
// //displayNames("Roshini","sai","harini","hasini");
// const arr3 = ["a", "b", "c"];
// const arr4 = [...arr3];
// arr3.push("d");
// //console.log(arr3);
// //console.log(arr4);
// const car1 = { name: "bmw", price: "1 cr" };
// const car2 = { color: "white", enginecc: 5000 }
// const car = { ...car1, ...car2 };
// //console.log(car);
// function square(val){
//     return val*val
// }
// function cube(val){
//     return val*val*val
// }

// function sumofSquares(val1,val2){
//     let firstValue = square(val1);
//     let secondValue = square(val2); 
//     return firstValue + secondValue
// }
// function sumofCubes(val1,val2){
//     let firstValue = cube(val1);
//     let secondValue = cube(val2); 
//     return firstValue + secondValue
// }

// function sumOfSomething(val1,val2,callbackFn){
//     let firstValue = callbackFn(val1);
//     let secondValue = callbackFn(val2); 
//     return firstValue + secondValue
// }

// const ans = sumOfSomething(2,3,cube)
// console.log(ans);
// setInterval(()=>console.log("hello Everyone"), 3000)
//console.log("hello");
//let count = 0;
//for (let i = 0; i < 100; i++) {
// count = count + i;
//};
//console.log(count);
//setTimeout(() => {
//  console.log("after 3 seconds");
//}, 3000);
//function task1(callback){
// setTimeout(()=>{
// console.log("task 1 is done");
// callback()
// },3000);
//};
//function task2(){
//setTimeout(()=>{
//console.log("task 2 is done");
// },1500);
//};
//task1(task2);
//function goodmorning(){
//console.log("hello!!good morning");
//}
//function goodevening(){
//console.log("hello!!good evening");
//}
//function greet(callback){
//console.log("greetings");
//callback()
//}
//greet(goodmorning);
//function task1(){
//return new Promise((resolve, reject) => {
//setTimeout(()=>{
//console.log("task 1 is done");
//},3000);
// });
//}
//function task2(){
// return new Promise((resolve, reject) => {
//setTimeout(()=>{
// console.log("task 1 is done");
// },1500);
// });
//}
//task1().then(()=>task2())
//  .then
function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const istask1done = false;
      if (istask1done) {
        console.log("task1 is done");
        resolve();
      } else {
        reject("task is not done");
      }
    }, 3000);
  });
}
//task1().then(() => task2())
  //.then()
  //.catch(err => console.log(err))
  async function executeAlltasks() {
    try{
      await task1();
      await task2();
      console.log("hello")
    }catch(error){
      console.error();
    }
    
  }
  executeAlltasks();