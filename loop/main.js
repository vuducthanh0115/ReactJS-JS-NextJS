// For/in loop

var myInfo = {
    name: "John",
    age: 20,
    city: "New York"
};

for (var key in myInfo) {
    console.log(myInfo[key]);
}

var myString = 'Javascript';

for(var key in myString) {
    console.log(myString[key]);
}

// For/of loop

var language = [
    'JavaScript',
    'PHP',
    'Java'
]

for ( var value of language) {
    console.log(value);
};

for ( var value of myString) {
    console.log(value);
};

for ( var  value of Object.keys(myInfo)){
    console.log(myInfo[value]);
}

for (var value of Object.values(myInfo)) {
    console.log(value);
}
