const sentence = "hello there from lighthouse labs";
let x  = 0;
for (let i = 0; i < sentence.length; i++) {
  if (i === sentence.length -1) {
    setTimeout(() =>  process.stdout.write(sentence[i] + '\n'), x);
 } else 
  setTimeout(() =>  process.stdout.write(sentence[i]), x);
    x += 50
  };