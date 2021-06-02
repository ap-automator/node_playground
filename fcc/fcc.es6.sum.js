const sum = (...args) => {
  let n=0;
  for (let i=0; i<args.length; i++) {
    n+= args[i];
  }
  console.log('n: ', n);
  return n;
}

sum(1,2,5,6,8,9);