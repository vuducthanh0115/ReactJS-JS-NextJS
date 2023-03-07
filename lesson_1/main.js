var fullName = 'Vu Duc Thanh';
var age = 25;

// alert(fullName);
// alert(age);

// confirm('Verify you are old enough to manage your account!'); // Message box confirm

// prompt('Verify you are old enough to manage your account!'); // Prompt is combination of alert + enter value

setTimeout(function(){
   // alert('Message') ;
}, 1000); // Excute code after 1 second

// setInterval(function(){
//     console.log('This is ' + Math.random());
// }, 1000); // Every 1s shows a random number

var a = 1;
var b = 2;

if(a === b){
    console.log('Correct!');
}
else{
    console.log('Wrong!');
}

// Js has 6 data type return false and remaining return true
/**
 *  0 
 * false
 * '' and "" 
 * undefined
 * NaN
 * null
 */

var age = 25;
console.log(`Age : ${age}`);


var myObject = {
    name : 'Thanh',
    age : 25,
    address : 'Ha Nam',
    myFunction() {

    },
};

console.log('myObject', myObject);

var myArray = [
    'JS',
    'PHP',
    'Ryby'
];
console.log(myArray);

var flag = (number) => {
    number%3 == 0 ? true : false;
};
console.log(flag ? 'Divisible by 3' : 'Not divisible by 3');

var result = 'A' && 'B' && NaN && 'D';

if(false){
    console.log('CORRECT');
}else {
    console.log('NOT CORRECT');
}

var mySrting = ' Vu Duc Thanh Duc Thanh Duc Thanh ';
console.log(mySrting.indexOf('Duc'));
console.log(mySrting.indexOf('u', 2));
console.log(mySrting.lastIndexOf('h'));
console.log(mySrting.search('h'));

console.log(mySrting.slice(3, 12));
console.log(mySrting.slice(3));

console.log(mySrting.replace('Duc Thanh', 'Ngoc Hai'));
console.log(mySrting.replace(/Duc Thanh/g, 'Ngoc Hai'));

console.log(mySrting.toLowerCase());
console.log(mySrting.toUpperCase());

// Delete space at head and end
console.log(mySrting.trim());

var language = 'JS, Java, PHP';

// Cut String to Array
console.log(language.split(', ')); 

console.log(mySrting.charAt(4));

var stringSpace = '';
function display(){
    for ( var param of arguments){
        stringSpace += `${param} - `;
    }
    console.log(`${stringSpace}`);
};
display('Number 1', 'Number 2', 'Number 3');

