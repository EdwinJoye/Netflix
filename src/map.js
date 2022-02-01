const array = [1, 2, 3, 4];

const result = array.map((num, index) => {
  console.log(index);
  return num * 2;
});

console.log(array);
console.log(result);
