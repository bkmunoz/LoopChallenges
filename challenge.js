// var i;
// var num = 20;
// for (i=1; i<=num; i++)
//     if (i % 2 != 0) {
//     console.log(i);
// }

// var i;
// for (i=4; i>-4; i-=1.5) {
//     console.log(i);
// }

// var i;
// sum = 0;
// for(i=1; i<=100;i++) {
//     sum = sum + i;
//     console.log(sum);
// }

var i;
var n = 1;
product = 1;
var ie8 = 100000000;
for(i = 1; product <= ie8; i++) {
    product *= n;
    n++;
}
console.log(n);