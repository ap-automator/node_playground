function rangeOfNumbers(startNum, endNum) {
  if (startNum==endNum) return [endNum];
  const x= rangeOfNumbers(startNum, endNum-1);
  console.log('p: ', endNum);
  x.push(endNum);
  return x;
};

  console.log(rangeOfNumbers(6, 9));