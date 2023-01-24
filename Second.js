console.log(window.alert("dcvgb")); // alert;
console.log(confirm("dswsd")); // confirm;
console.log(print("dswsd"));
console.log(prompt("dswsd")); // prompt;
console.log(navigator.userAgent);
console.log(navigator.cookieEnabled);
console.log(navigator.languages);

/* type conversions */
let x4 = 543;
console.log(String(x4));
console.log(String(543));
console.log(String(500) + 43);

/*  */
let x6 = 4325;
console.log(
  x6.toExponential(2) +
    " " +
    x6.toFixed(2) +
    " " +
    x6.toPrecision(2) +
    " " +
    x6.toString()
);
console.log(x6.valueOf() + " " + (4000 + 325).valueOf());

/* basic operators */
let x1 = 5;
let y1 = 2;
console.log("x * y " + x1 * y1);
console.log("x + y  " + x1 + y1);
console.log("x - y " + x1 - y1);

let a = 3;
let xb = (100 + 50) * a;
console.log("xb" + xb);

/* loop */
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}
/* function */
