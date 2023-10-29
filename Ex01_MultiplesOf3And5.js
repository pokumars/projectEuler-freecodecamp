/* Problem 1: Multiples of 3 and 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.*/

function multiplesOf3and5(number) {
  const range = Array.from(Array(number).keys()).slice(1)
  //const multiplesof3And5 = range.filter(n => n % 5 == 0 || n % 3 == 0)

  const sum = range.reduce((accumulator, currentValue) => {
     if (currentValue % 5 == 0 || currentValue % 3 == 0) {
      return accumulator + currentValue
    } else{
      return accumulator
    }
  }, 0)
  
  //console.log(multiplesof3And5)
  console.log('sum ', sum, 'range.length', range.length)
  return sum;
}

multiplesOf3and5(10);
