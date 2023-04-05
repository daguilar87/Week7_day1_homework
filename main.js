//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];

function findWords(){ 
    for (let i = 0; i < dog_names.length; i++) {
        if (dog_string.includes(dog_names[i])) { 
            console.log(`Matched ${dog_names[i]}`); 
        } else {
            console.log("No Matches");
    }
}}
console.log(findWords())
//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens() {for (let i = 0; i<Given_arr.length; i +=2 ){ Given_arr.splice(i, 1,  "even index")
}

}
replaceEvens();
console.log(Given_arr)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
//

//code wars
// function greet(){
//     return "hello world!"
//   }

//   https://www.codewars.com/kata/523b4ff7adca849afe000035/train/javascript

//   function simpleMultiplication(number) {
//     if (number % 2 === 0) {
//    return number * 8;
//  } else {
//    return number * 9;
//  }
// }

// https://www.codewars.com/kata/583710ccaa6717322c000105