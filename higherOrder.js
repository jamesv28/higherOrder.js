var array = [1,2,3,4,5];
//returns an array
array.forEach(function (num) {
    console.log('myNum: ', num);
});
array.some(function (el) {
    return el > 4;
});
//return true
array.some(function (el, index) {
    console.log(index);
    return el > 2;
});
//console.logs' 0 1 2
array.every(function (el) {
    return el > 0;
});
//returns true
array.every(function (el) {
    return el > 1;
});
//returns false
array.map(function (el) {
    return el + 1;
});
//returns [2, 3, 4, 5, 6]
array.map(function (el, index, array) {
    return array[index+1];
});
//returns [2, 3, 4, 5, undefined]
var words = ['SHOUTY', 'SHOUTY', "whisper"];
words.map(function (el) {
    return el.toLowerCase();
});
//returns ['shouty', 'shouty', 'whisper']
var arrays = [[1,2,3],[4,5]];
arrays.map(function (el) {
    el.pop();
    return el;
});
//returns [[1,2],[4]]
//DESTRUCTIVE when called with pop.
array.filter(function (num){
    return num > 3;
});
//returns [4,5]
array.filter(function (num) {
    return num % 2;
});
//returns [1,3,5];
array.filter(function (num) {
    return num%2;
}).forEach(function (oddNum) {
    console.log("I am odd: ", oddNum);
});
//console.log's: I am odd: 1   I am odd: 3    I am odd: 5
array.map(function (el) {
    return el *  5;
}).filter(function (el) {
    return el > 20;
});
//returns [25]
array.map(function (el) {
    return el * 5;
})[0];
//returns 5
//***REDUCE***
array.reduce(function (prev, curr) {
    return prev + curr;
});
//returns 15
//prev: 1 curr: 2
//prev: 3 curr: 3
//prev: 6 curr: 4
//prev: 10 curr: 15
var objs = [{ name: "Hunter", coolness: 10}, {name: "Wes", coolness: 7}];
objs.reduce(function (prev, curr) {
    var cool = prev.coolness + curr.coolness;
    return cool;
});
//returns 17
var objs2 = [{ name: "Hunter", coolness: 10}, {name: "Wes", coolness: 7}, {name: 'Dave', coolness: 8}];
objs2.reduce(function (acc, person) {
    console.log('acc:', acc);
    acc[person.name] = person.coolness;
    return acc;
}, {});
//returns {Hunter: 10, Wes: 7, Dave: 8}
//console.log: acc: {}
//console.log: acc: {Hunter: 10}
//console.log: acc: {Hunter: 10, Wes: 7}