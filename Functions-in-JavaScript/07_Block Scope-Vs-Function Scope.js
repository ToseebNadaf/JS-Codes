// block scope vs function scope

// let and const are block scope
// var is function scope

{
  let a = "tosib";
  const b = "nadaf";

  var c = "matrix";
}

//console.log(a);  <---- ERROR because we cannot access let-const variables out of {}
//console.log(b);  <---- ERROR because we cannot access let-const variables out of {}

{
  // console.log(a);  <--- even we cannot access them in another {}
  // console.log(b);

  console.log(c); // we can access VAR in another {} + out of {}
}

console.log(c); // we can access VAR in another {} + out of {}

//----------------------------------
//OUTPUT - matrix
//         matrix

//---------------------------------------------
//---------------------------------

function myApp() {
  if (true) {
    let firstName = "tosib";
    console.log(firstName);
  }

  // console.log(firstName); // <---- this will give ERROR

  if (true) {
    var secName = "raju";
    console.log(secName);
  }

  console.log(secName); // <--- we can access this
}

myApp();

//console.log(secName); <-- we also cannot access here VAR for doing access we have to return value from function
