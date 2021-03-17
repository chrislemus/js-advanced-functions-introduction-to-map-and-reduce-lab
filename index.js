// Your code here
function mapToNegativize(numbers) {
  return numbers.map(num => num * -1)
}

function mapToNoChange(numbers) { return numbers };

function mapToDouble(numbers) {
  return numbers.map(num => num * 2)
}

function mapToSquare(numbers) {
  return numbers.map(num => num ** 2)
}

function reduceToTotal(numbers, startNum=0) {
  return numbers.reduce((acc, num) =>  acc + num, startNum)
}
function reduceToAllTrue(array) {
  // return array.reduce((accu, curr) => Boolean(Math.min(accu, curr)))
  let a;
  array.forEach((element, idx) => {
    if(Boolean(element)){
      if(idx === (array.length - 1))a = true;
    } else {
      a = false
    }
  });
  return a
}

function reduceToAnyTrue(array) {
  let a;
  array.forEach((element) => {
    if(Boolean(element)){
      a = true;
    } else {
      a = false
    }
  });
  return a
}