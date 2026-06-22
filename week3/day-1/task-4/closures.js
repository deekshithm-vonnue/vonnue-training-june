//create Counter
function createCounter() {
  let count = 0;
  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }

  function getCount() {
    return count;
  }

  function reset() {
    count = 0;
  }
  return [increment, decrement, getCount, reset];
}

let [count_increment, count_decrement, getCount, reset] = createCounter();

count_increment();
console.log(getCount());
count_increment();
console.log(getCount());
count_decrement();
console.log(getCount());
reset();
console.log(getCount());

function fibonaci(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  return fibonaci(n - 1) + fibonaci(n - 2);
}

function memo(func) {
  const cache = new Map();
  cache.set(1, 0);
  cache.set(2, 1);
  let result = 0;
  return (n) => {
    if (!cache.has(n)) {
      console.log("cache miss");
      cache.set(n, func(n));
      return cache.get(n);
    }
    console.log("cache hit");
    return cache.get(n);
  };
}

const cachedFibonacci = memo(fibonaci);
console.log(cachedFibonacci(13));
console.log(cachedFibonacci(13));

const onecall = {
  called: false,
  result: 0,
  once: function (func, n) {
    if (!this.called) {
      this.called = true;
      this.result = func(n);
      return this.result;
    }
    return this.result;
  },
};

console.log(onecall.once(fibonaci, 1));
console.log(onecall.once(fibonaci, 2));

function createRateLimiter(fun, maxCalls, windowMs) {
  let calls = [];

  return function (...args) {
    const now = Date.now();
    calls = calls.filter((timestamp) => now - timestamp < windowMs);

    if (calls.length >= maxCalls) {
      throw new Error("exceed the limit");
    }
    calls.push(now);
    return fun(...args);
  };
}

const timing = createRateLimiter(console.log, 3, 100);

timing("hello");
timing("world");
timing("hello-word");
try {
  timing("deekshith");
} catch (e) {
  console.log(e);
}
console.log("hello");
