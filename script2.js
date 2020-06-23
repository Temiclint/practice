// var hash ="#"
// var num = 1
// var result 
// for (var i = 0; i <= 8; i++){
// var result = hash * num
// num += 1;
// }
// console.log(result)


var hash = 1;
var count = 1;
var result  = hash * count
for (var i = 1; i<10; i++){
//     var hash = 1
// var count = i;
var result  = hash * count
    console.log(result);
    var count= count+ 1
    
}

var hash = 1;
var count = 1;

for (var i = 1; i<10; i++){

var result  = hash * count
    console.log(result);
    var count= count+ 1
    
}
let has= "#"
console.log(has * has)



let hash = "#";
let count = "#";

for (let i = 0; i<10; i++){

let result  = hash + count
    console.log(result);
    let count= count+"#"
    
}


for (let counter = 1; counter<= 10; counter ++   ){
    console.log(counter);
}
let hash = 1
for (let counter = "#"; counter.length<= 10; counter +"#"   ){
    console.log(counter);
    counter.length=counter.length + 1
}

// incrementing # print 

let counter ="#"
for (let hash = 1; hash <8; hash ++){
    console.log(counter);
    counter= counter + "#"
    console.log("");
}

// alternating # print
let counter1 ="#  #  #  #  #";
let counter2="  #  #  #  #  ";
for(let count = 0; count < 8; count++){
    if (count % 2){
        console.log(counter1)  ;
}else{
    console.log(counter2);
}
}
// fizz buzz print for numbers divisible by 5 and 3

for(let count2 = 1; count2<=100; count2++){
    let fived = count2%5==0;
    if(count2%3==0){
        console.log("FIZZ");
    }else if (count2%5 == 0 && count2%3 !=0){
        console.log("BUZZ");
    } else if(count2%5 == 0 && count2%3 == 0){
        console.log("FIZZ BUZZ");
    }
    else{
        console.log(count2);
    }
}
// prints fizzbuzz when number is divisible by 3 and 5, fizz when number is divisible by 3, and buzz when number is divisible by 5
for(let count2 = 1; count2<=100; count2++){
 if (count2 % 5 == 0 && count2 % 3 == 0){
     console.log("FIZZ BUZZ");
 }else if (count2 % 3 == 0){
     console.log("FIZZ");
 }else if (count2 % 5 == 0){
     console.log("BUZZ");

 }else{
     console.log(count2);
 }
}

//function which returns the smallest of two numbers
function min (a,b){
    if (b == a){
        return "Both are equal"
    }else if (a > b) {
        return b
    }else{
        return a
    }
}
// function that returns a number if true or false
function isEven(number){
    if(number == 0){
        return true
    }else if (number < 0){
        return isEven(-number)
    }
    else if(number == 1){
        return false
    }else{
        return isEven(number-2)
    }
}
// function to count bs
function countBs(wrd){
    let wrdcnt =0
    for(let i = 0; i< wrd.length; i++){
        if(wrd[i]==="B"){
            wrdcnt +=1
        }
    }return wrdcnt
}
// function to NO OF ANY LETTER IN A GIVEN STRING
function countString(wrd, letter){
    let wrdcnt =0
    for(let i = 0; i< wrd.length; i++){
        if(wrd[i]===letter){
            wrdcnt +=1
        }
    }return wrdcnt
}



function zeroPad(number, width){
    let stringNumber = String(number);
    while(stringNumber.length < width ){
        stringNumber = "0" + stringNumber
    }return stringNumber
}

function name(cow,goat,lion){
    console.log(`${zeroPad(cow, 4)} cows`);
    console.log(`${zeroPad(goat, 5)} goats`);
    console.log(`${zeroPad(lion,9)}lions`)
}
name(9,2,4)