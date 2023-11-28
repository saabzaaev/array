// Task-1
function longestWord(sentence) {
    let splittedSentence = sentence.split(" ");
    let maxLength = 0;
    let maxWord = "";

    splittedSentence.forEach(word => {
      if (word.length > maxLength) {
        maxLength = word.length;
        maxWord = word;
      }
    });

    return maxWord;
  }
console.log(longestWord("ehson rahmatulloh muhammaddlakd abdulloh"));

// Task-2
function supermans(str)
{
    return str.filter(element =>
        {
            let lower = element.toLowerCase()
            if(lower.slice(-3) === 'man')
            {
                return element
            }
        })
}
console.log(supermans(["spider-man" , "batman" , "superman" , "hulk" , "brusli"]));

// Task-3
function filters(arr)
{
    // let result = arr.forEach((element , index)=>
    // {
    //     if(index % 2 == 0 && element % 2 != 0)
    //     {
    //         return false
    //     }
    // })
    let cnt = 0;
    let result = arr.forEach((e , i)=>
    {
        if(i % 2 == 0 && e % 2 != 0 || i % 2 != 0 && e % 2 == 0)
        {
            cnt++
        }
    })
    if(cnt==0) return "true"
    else return "false"
}
console.log(filters([2, 7, 9, 1, 6, 1, 6, 3]));

// Task-4
function sum(numbers)
{
    numbers.sort((a,b)=>a-b)
    return numbers[0] + numbers [1]
}
console.log(sum([2,3,4,5,6,7,7,8,9,0,1]));

// Task-5
function seven(arr)
{
    return seven = arr.map(element =>
        {
            return element + '7'
        });
}
console.log(seven(["hello" , "my" , "name" , "is" , "Ehson"]));
  
