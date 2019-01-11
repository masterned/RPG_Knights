const fizzBuzz = x => !(x % 15) ? 'FizzBuzz' : !(x % 3) ? 'Fizz' : !(x % 5) ? 'Buzz' : x;

new Array(100).fill(null).map((v,i) => fizzBuzz(++i)).forEach(x => console.log(x));