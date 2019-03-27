"use strict"

//first 3 task


// let numbers=[];
// let arrayLength = +prompt("Neçə rəqəm daxil edəcəksiniz: ")
// let userInput;
// let max = -Infinity;
// let min = Infinity;
// let sum = 0;
// let sum_even = 0;
// let sum_odd = 0;
// let orta = 0;
// let evens = [];
// let odds = [];
// while (!arrayLength | arrayLength < 0) 
// {
//     arrayLength = +prompt("Uzunlugu duz secin: ")    
// }
// for(let i = 0; i < arrayLength; i++)
// {
//     userInput = +prompt(i+1 + "-ci reqemi daxil edin");
    
//     while (isNaN(userInput)) {
//         userInput =prompt("Ağıllı ol !")
//     }
//     numbers.push(userInput);
//     //min max eded
//     if(numbers[i] > max)
//     {
//         max = numbers[i];
//     }
//     if(numbers[i] < min)
//     {
//         min = numbers[i];
//     }
//     //cut ve tek ededler
//     if(numbers[i]%2 == 0){
//         evens.push(numbers[i]);
//         //cut cem
//         sum_even += numbers[i];
//     }
//     if(numbers[i]%2 == 1 | numbers[i]%2 == -1){
//         odds.push(numbers[i]);
//         //cem tek
//         sum_odd += numbers[i];
//     }
//     //ededi orta
//     sum += numbers[i];
//     orta = sum / numbers.length;
// }


//  console.log("Reqemleriniz bunlardir: " + numbers);
//  console.log("En boyuk eded: " + max);
//  console.log("En kicik eded: " + min);
//  console.log("Ededlerin ortasi: " + orta);
//  console.log("Cut ededlerin sayi: " + evens.length);
//  console.log("Tek ededlerin sayi: " + odds.length);
//  console.log("Cut ededlerin cemi: " + sum_even);
//  console.log("Tek ededlerin cemi: " + sum_odd);
//  console.log("Butun ededlerin cemi: " + sum);


//last task

let words = [];
let userInput;
let max = 0;
let min = Infinity;
let biggerLength;
let smallerLength;
for (let i = 0; i < 10; i++) {
    userInput = prompt(i+1 + "-ci sozu daxil edin: ");
    words.push(userInput);
    
    if(words[i].length > max){
        max = words[i].length;
        biggerLength = i;
    }
    if(words[i].length < min){
        min = words[i].length;
        smallerLength = i;
    }
}

console.log(words[biggerLength]);
console.log(words[smallerLength]);