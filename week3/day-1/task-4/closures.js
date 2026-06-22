//create Counter
function createCounter(){
    let count=0;
    function increment(){
        count++;
    }

    function decrement(){
        count--;
    }

    function getCount(){
        return count;
    }

    function reset(){
        count=0;
    }
    return [increment,decrement,getCount,reset];
}

let [count_increment,count_decrement,getCount,reset] = createCounter();

count_increment();
console.log(getCount());
count_increment();
console.log(getCount());
count_decrement();
console.log(getCount());
reset();
console.log(getCount());