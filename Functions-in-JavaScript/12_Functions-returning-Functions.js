// Functions returning Functions

function myFunc() {
  function hello() {
    return "hello world";
  }

  return hello; // returning hello() function
}

const ans = myFunc();
console.log(ans()); //hello world
