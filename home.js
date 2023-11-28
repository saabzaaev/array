// // Task-1
// function longestword(sentence)
// {
//     let long = sentence.filter(sentence > 0)=>
//     return long
// }
// console.log(longestword(["ehson rahmatulloh muhammad abdulloh"]));

// Task-2
function supermans(str)
{
    let res =  str.filter(names =>
        {
            let nom = names.toLowerCase()
            return nom.substr(nom.lingth - 3) === 'man'
        })
}
const arr1 = ["spider-man , batman , superman , hulk"]
const result1 = supermans(arr1)
console.log(result1);

// Task-4
function sumTwoSmallestNums(numbers)
{
    let positiveNumbers = numbers.filter(num => num > 0);
    positiveNumbers.sort((a, b) => a - b);
    return positiveNumbers[0] + positiveNumbers[1];
}
const arr = [1 , 33 , 4 , 5, 65 , 7 , 10 , 10 , 17 , 0];
const result = sumTwoSmallestNums(arr);
console.log(result);  // Output: "sentence"
  
