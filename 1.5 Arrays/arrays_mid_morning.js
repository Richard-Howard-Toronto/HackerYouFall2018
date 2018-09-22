// push and pop --on the backend`
// shift and upshift -- on the front

const MyArray = [1,2,3,4,"fish"];
MyArray.push(999); // push is a method
console.log(MyArray);

MyArray.pop(999); // removes the end value
console.log(MyArray);

MyArray.pop(); // removes the end value
console.log(MyArray);

MyArray.shift(); // auto grabs first item and removes it
console.log(MyArray);

MyArray.unshift(111); // adds 111 to the first element of the array
console.log(MyArray);
