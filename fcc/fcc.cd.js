function countdown(n){
  if (n<1) {return []};
  const x= countdown(n-1);
console.log('i pushing: ', n);
  x.unshift(n);
  return x;
}

console.log(countdown(6));