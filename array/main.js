var myArray = [
    {
        id : 1,
        name : "John",
        coin : 20
    },
    {
        id : 2,
        name : "Jane",
        coin : 10
    },
    {
        id : 3,
        name : "Mary",
        coin : 0
    },
    {
        id : 4,
        name : "Mike",
        coin : 10
    },
    {
        id : 5,
        name : "Mike",
        coin : 0
    }
];

myArray.forEach(function(item, index) {
    console.log(index, item);
});

var flag = myArray.every(function(item, index) {
    console.log(index);
    return item.coin === 0;
});

console.log(flag);

var flags = myArray.some(function(item, index) {
    console.log(index);
    return item.coin === 0;
});

console.log(flags);

var flagFind = myArray.find(function(item, index) {
    return item.name === 'Mike';
});

console.log(flagFind);

var flagFind2 = myArray.filter(function(item, index) {
    return item.name === 'Mike';
});
console.log(flagFind2);
console.log('------------------------------');

var sports = [
    {
        id : 1,
        name : 'Football',
        score : 5
    },
    {
        id : 2,
        name : 'Basketball',
        score : 6
    },
    {
        id : 3,
        name : 'Tennis',
        score : 9
    },
    {
        id : 4,
        name : 'Swimming',
        score : 3
    },
    {
        id : 5,
        name : 'Volleyball',
        score : 8
    }
];

function getMostFavoriteSport(param){
    return param.filter(function(s) {
        return s.score > 5;
    });
};
console.log(getMostFavoriteSport(sports));

var referSport = (course) => {
    // console.log(course);
    return {
        id : course.id,
        name : `Course : ${course.name}`,
        score : course.score
    };
};
console.log('=========================');
var newCourse = sports.map(referSport);
console.log(newCourse);


var sportss = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
];
function getTotalGold(){
    return sportss.reduce(function(a, c){
        return a+=c.gold;
    }, 0);
}
console.log(getTotalGold());

const array1 = [1, 2, 3, 4];

console.log("====================");

var totalGold = sportss.reduce( (total, sports) => {
    console.log(total, sports);
    return total + sports.gold;
}, 0);

// function calculateRating(arr) {
//     var tmp = arr.filter(function(item,index){
//        return item.Director === "Christopher Nolan"
//      })
//      var total = (tmp.reduce(function(acc,cur){
//        return acc+=Number(cur.imdbRating)
//      },0))
//      return (total/(tmp.length))
//    }
  
  
//   // Expected results
//   console.log(calculateRating(watchList)); // Output: 8.675

  var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  
  function calculateRating(){
    var watchLists =  watchList.filter(
      (item, index) => item.Director === 'Christopher Nolan'
      );
  
      var sumScore = watchList.reduce( 
          (total, currentValue) => total + Number(currentValue.imdbRating), 0
      );
      return sumScore/(watchLists.length);
  }
  
  console.log(calculateRating());

  var myArray = [ 
    {
        name : 'John',
        age : 30
    }
  ];


var objectTemp = {
    name : 'JK',
    age : 20
}
objectTemp['city'] = 'Ha Noi';
  console.log(objectTemp);

  Array.prototype.myMap = function (cb){
    var arrLenght = this.length;
    var arr = [];
    for(let i = 0; i < arrLenght; i++){
        var result = cb(this[i], i);
        arr.push(result);
    }
    return arr;
};

// Expected results
const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number) {
    return number * 2;
})); // Output: [2, 4, 6]

console.log(numbers.myMap(function (number, index) {
    return number * index;
})); // Output: [0, 2, 6]

for(let i = 0; i < 5; i++){
    console.log(i)
}