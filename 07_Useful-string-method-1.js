// trim() -- remove extra spaces if there is not any character
// toUpperCase() -- all capital letters
// toLowerCase() -- all small letters
// slice() -- take some character from string

let a = "     tosib     "; //       parth     
console.log(a);
console.log(a.length);//13

let b = a.trim(); 
console.log(b);//tosib
console.log(b.length);//9



//a.slice(starting index , end index - 1 )

let newString = b.slice(0,2); // to
console.log(newString);
