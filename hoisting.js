console.log(c); //TDZ
var c = 90;

console.log(c);

console.log(add(10, 30));
function add(a, b) {
  return a + b;
}

console.log(add1(10,20));
var add1 = function (a, b) {
  return a + b;
};

console.log(add1(50, 30));
let g = 90;
console.log(g);

{
  console.log(g);
  {
    console.log(g);
    {
      console.log(g);
      {
        console.log(g);
      }
    }
  }
}
