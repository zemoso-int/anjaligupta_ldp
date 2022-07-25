var numbers = [3, 10, 9 , 6];

function compareNums(a, b){
  return a - b;
}

numbers.sort(compareNums);
//Notice that when compareNums function is passed as an argument to the sort method we didn't put parentheses after the function name

console.log(numbers); // outputs [3, 6, 9, 10]