// function User(lastName, firstName, age){
//     this.lastName = lastName;
//     this.firstName = firstName;
//     this.age = age;
//     this.fullName = function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// var User = function (lastName, firstName, age){
//     this.lastName = lastName;
//     this.firstName = firstName;
//     this.age = age;
//     this.fullName = function(){
//         console.log("-------------------");
//         console.log(this);
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// var user = new User('Thanh', 'Vu', 20);

// console.log(user.fullName);

// console.log(user.fullName());

// User.prototype.className = 'AdvancedUser';
// User.prototype.getClassname = function(){
//     return this.className;
// };
// console.log(user.className);

// console.log(user.getClassname());

// var date = new Date();

// console.log(date.getDate());
// console.log(user);


Array.prototype.myMap = function (cb){
    var arrLenght = this.length;
    var arr = [];
    for(var i = 0; i < arrLenght; i++){
        var result = cb(this[i], i);
        arr.push(result);
    }
    return arr;
};

// Expected results
const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number, index) {
    return number * 2;
})); // Output: [2, 4, 6]

console.log(numbers.myMap(function (number, index) {
    return number * index;
})); // Output: [0, 2, 6]